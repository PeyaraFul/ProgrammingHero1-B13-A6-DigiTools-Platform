import { use } from "react";
import CheckIcon from "../../products/check-solid.png";
const Plan = ({ planPromise }) => {
  const plans = use(planPromise);
  const btnStyle = "bg-gradient-to-r from-[#9514fa]  to-[#4f39f6] rounded-full text-white"

  console.log(plans);

  return (
    <>
    <h1 className="text-center font-bold text-3xl ">Simple, Transparent Pricing</h1>
    <p className="text-center">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6 mx-30">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-4 rounded-2xl border border-gray-200 ${plan.bg} ${plan.textColor}`}
          >
            <h1 className="text-2xl font-semibold">{plan.plan_name}</h1>
            <p> {plan.target_audience} </p>
            <h3>
              {" "}
              <span className="text-2xl font-semibold">{plan.price}</span>/{" "}
              {plan.billing_cycle}{" "}
            </h3>
            <div className="my-1">
              {plan?.features?.map((feature, index) => (
                <p key={index} className="my-0.5 flex gap-1">
                  <img src={CheckIcon} alt="CheckIcon" className="w-5" />
                  {feature}
                </p>
              ))}
            </div>
            <button className={`btn ${btnStyle} w-full`} > {plan.call_to_action} </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plan;
