import React from 'react'

function Content() {
  return (
    <div>
      <main className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <section className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome to Our Website
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our features and offerings. This is just a placeholder for your amazing content!
            </p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600">
              Get Started
            </button>
          </section>

    
          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
              Our Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
          
              <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Feature 1
                </h3>
                <p className="text-gray-600">
                  Description of your first amazing feature.
                </p>
              </div>
         
              <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Feature 2
                </h3>
                <p className="text-gray-600">
                  Description of your second amazing feature.
                </p>
              </div>

              <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Feature 3
                </h3>
                <p className="text-gray-600">
                  Description of your third amazing feature.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Content
