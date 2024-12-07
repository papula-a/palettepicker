"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TawkToWidget() {
  const pathname = usePathname();
  const [tawkLoaded, setTawkLoaded] = useState(false);

  useEffect(() => {
    // Function to load Tawk.to script
    const loadTawkTo = () => {
      // Check if Tawk.to is already loaded
      if (window.Tawk_API && !tawkLoaded) {
        try {
          window.Tawk_API.showWidget();
          setTawkLoaded(true);
          return;
        } catch (error) {
          console.log("Error showing Tawk.to widget:", error);
        }
      }

      // If not loaded, create and append script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_IO_PROPERTY_ID}/${process.env.NEXT_PUBLIC_TAWK_IO_WIDGET_ID}`;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      // Add onload handler to ensure widget is ready
      script.onload = () => {
        if (window.Tawk_API) {
          try {
            window.Tawk_API.showWidget();
            setTawkLoaded(true);
          } catch (error) {
            console.log("Error initializing Tawk.to widget:", error);
          }
        }
      };

      document.body.appendChild(script);
    };

    // Function to remove Tawk.to widget
    const removeTawkTo = () => {
      // Try to remove the Tawk.to iframe
      const tawkFrame = document.getElementById("tawk-container");
      if (tawkFrame) {
        tawkFrame.remove();
      }

      // If Tawk_API is available, try to minimize or hide
      if (window.Tawk_API) {
        try {
          window.Tawk_API.minimize();
          window.Tawk_API.hideWidget();
        } catch (error) {
          console.log("Error controlling Tawk.to widget:", error);
        }
      }

      // Remove all Tawk.to related scripts
      const tawkScripts = document.querySelectorAll('script[src*="tawk.to"]');
      tawkScripts.forEach((script) => script.remove());

      // Reset loaded state
      setTawkLoaded(false);
    };

    // Logic to show/hide based on pathname
    if (pathname === "/templates") {
      loadTawkTo();
    } else {
      removeTawkTo();
    }

    // Cleanup function
    return () => {
      removeTawkTo();
    };
  }, [pathname, tawkLoaded]);

  return null;
}
