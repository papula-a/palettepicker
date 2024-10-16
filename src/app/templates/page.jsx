import Card from "@/components/Card";

const Templates = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-64 bg-gradient-to-r from-[#3F1B62] via-[#A881A7] to-pink-200">
        <div className="text-center text-lg text-white">
          <h1 className="text-2xl m-3">OUR PRE-MADE TEMPLATES</h1>
          <p className="text-lg m-3">
            Try your color combinations on{" "}
            <span className="text-yellow-500">ready-to-use</span> templates
          </p>
        </div>
      </div>

      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render each Card with unique content */}
            <Card
              title="E-COMMERCE WEBSITE"
              description="Facilitate buying and selling goods and services online with this responsive E-commerce template."
              imageSrc="/static/ecommerce.png"
              altText="E-commerce"
            />
            <Card
              title="BLOG WEBSITE"
              description="Perfect for sharing articles and stories. This blog template is clean, customizable, and responsive."
              imageSrc="/static/blog.png"
              altText="Blog"
            />
            <Card
              title="CORPORATE WEBSITE"
              description="Showcase your company, services, and portfolio with this professional corporate website template."
              imageSrc="/static/corporate.png"
              altText="Corporate"
            />
            <Card
              title="MEMBERSHIP WEBSITE"
              description="Offer exclusive content to your subscribers with this modern membership site template."
              imageSrc="/static/membership.png"
              altText="Membership"
            />
            <Card
              title="PORTFOLIO WEBSITE"
              description="A sleek, modern template for displaying personal portfolios or creative works."
              imageSrc="/static/portfolio.png"
              altText="Portfolio"
            />
            <Card
              title="LANDING PAGE"
              description="This template is designed for single-page websites and product launches."
              imageSrc="/static/landing-page.png"
              altText="Landing Page"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
