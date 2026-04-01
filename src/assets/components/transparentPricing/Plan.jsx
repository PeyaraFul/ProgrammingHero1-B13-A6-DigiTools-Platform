import { use } from "react";
import CheckIcon from "../../products/check-solid.png";
const Plan = ({ planPromise }) => {
  const plans = use(planPromise);

  console.log(plans);

  return (
    <>
      <div className="flex gap-12 justify-center">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-4 rounded-2xl border border-gray-200 ${plan.bg}`}
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
            <button className="btn btn-primary mt-auto bg-linear-to-r from-[#4f39f6] to-[#9514fa]"> {plan.call_to_action} </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plan;
