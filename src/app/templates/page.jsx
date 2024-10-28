import Card from "@/components/Card";

const Templates = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-64 bg-gradient-to-r from-[#3F1B62] via-[#A881A7] to-pink-200">
        <div className="text-center text-lg text-white">
          <h1 className="text-2xl font-bold m-3">OUR PRE-MADE TEMPLATES</h1>
          <p className="text-lg m-3">
            Try your color combinations on{" "}
            <span className="text-yellow-500 font-semibold">ready-to-use</span>{" "}
            templates
          </p>
        </div>
      </div>

      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Render each Card with unique content */}
            <Card
              title="E-COMMERCE WEBSITE"
              description="Facilitate buying and selling goods and services online with this responsive E-commerce template."
              imageSrc="/static/ecommerce.png"
              altText="E-commerce"
              linkHref="/e-commerce"
            />
            <Card
              title="BLOG WEBSITE"
              description="Perfect for sharing articles and stories. This blog template is clean, customizable, and responsive."
              imageSrc="/static/blog.png"
              altText="Blog"
              linkHref="/blog"
            />
            <Card
              title="PORTFOLIO WEBSITE"
              description="A sleek, modern template for displaying personal portfolios or creative works."
              imageSrc="/static/portfolio.png"
              altText="Portfolio"
              linkHref="/portfolio"
            />
            <Card
              title="LANDING PAGE"
              description="This template is designed for single-page websites and product launches."
              imageSrc="/static/landing-page.png"
              altText="Landing Page"
              linkHref="/landing-page"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
