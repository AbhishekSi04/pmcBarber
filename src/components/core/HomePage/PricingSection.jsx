
import React from 'react';
import price_data from '../../../data/price_data';
import { CheckCircle } from 'lucide-react'; // Or use any icon lib

const PricingSection = () => {
  return (
    <div id='pricing-section'>


<h2 className="text-3xl md:text-4xl font-bold text-white text-center mt-10 mb-10 relative">
  Our Service Prices
  <span className="block w-16 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
</h2>

    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-richblack-900 text-white">
    

    <br/>
      {price_data.map((plan, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between rounded-2xl p-6 w-full lg:w-1/3 bg-richblack-800 border ${
            plan.isFeatured ? 'border-yellow-500 relative' : 'border-richblack-700'
          }`}
        >
          {plan.isFeatured && (
            <div className="absolute top-0 left-0 bg-yellow-500 text-black px-4 py-1 rounded-br-2xl text-sm font-semibold">
              {plan.tag}
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <div className="flex items-baseline gap-1 text-yellow-400 text-3xl font-bold">
              <span>$</span>
              <span>{plan.price}</span>
              <span className="text-base font-medium text-richblack-400">{plan.billingCycle}</span>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-yellow-400 w-5 h-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            className={`mt-6 py-2 rounded-md font-semibold ${
              plan.isFeatured
                ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                : 'bg-richblack-700 text-white hover:bg-richblack-600'
            }`}
          >
            {plan.buttonText}
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PricingSection;