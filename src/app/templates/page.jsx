import Card from "@/components/Card";

const Templates = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-64 bg-gradient-to-r from-[#3F1B62] via-[#A881A7] to-pink-200">
        <div className="text-center text-lg text-white">
          <h1 className="text-2xl m-3">OUR PRE-MADE TEMPLATES</h1>
          <p className="text-lg m-3">
            Try your color combinations on{" "}
            <span className="text-yellow-500">ready-to use</span> templates
          </p>
        </div>
      </div>
      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
