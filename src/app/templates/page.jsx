import Card from "@/components/Card";

const Templates = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-64 bg-gradient-to-r from-pink-400 to-purple-200">
        <div className="text-center text-lg text-purple-950">
          <h1 className="text-2xl font-bold m-3">OUR PRE-MADE TEMPLATES</h1>
          <p className="text-lg m-3">
            Try your color combinations on{" "}
            <span className="text-pink-600 font-semibold">ready-to-use</span>{" "}
            templates
          </p>
        </div>
      </div>

      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Set to always have 2 columns with spacing */}
            <Card
              title="E-COMMERCE WEBSITE"
              description="Facilitate buying and selling goods and services online with this responsive E-commerce template."
              imageSrc="/static/ecommerce.png"
              altText="E-commerce"
              linkHref="/templates/e-commerce"
            />
            <Card
              title="BLOG WEBSITE"
              description="Perfect for sharing articles and stories. This blog template is clean, customizable, and responsive."
              imageSrc="/static/blog.png"
              altText="Blog"
              linkHref="/templates/blog"
            />
            <Card
              title="PORTFOLIO WEBSITE"
              description="A sleek, modern template for displaying personal portfolios or creative works."
              imageSrc="/static/portfolio.png"
              altText="Portfolio"
              linkHref="/templates/portfolio"
            />
            <Card
              title="LANDING PAGE"
              description="This template is designed for single-page websites and product launches."
              imageSrc="/static/landing-page.png"
              altText="Landing Page"
              linkHref="/templates/landing-page"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
