"use client";
import { useState } from "react";

const data = {
  schedual: [
    { day: "Lundi", hours: "6h00 - 22h00" },
    { day: "Mardi", hours: "6h00 - 22h00" },
    { day: "Mercredi", hours: "6h00 - 22h00" },
    { day: "Jeudi", hours: "6h00 - 22h00" },
    { day: "Vendredi", hours: "6h00 - 22h00" },
    { day: "Samedi", hours: "6h00 - 22h00" },
  ],
};

function Schedule() {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
    activity: "", // NEW: activity level
  });

  const [bmiResult, setBmiResult] = useState<string | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [bmrResult, setBmrResult] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const heightNum = parseFloat(formData.height);
    const weightNum = parseFloat(formData.weight);
    const ageNum = parseFloat(formData.age);
    const gender = formData.gender;
    const activity = formData.activity;

    if (heightNum > 0 && weightNum > 0 && ageNum > 0 && gender && activity) {
      // --- BMI ---
      const heightInMeters = heightNum / 100;
      const bmi = weightNum / (heightInMeters * heightInMeters);
      const roundedBmi = bmi.toFixed(1);
      setBmiResult(roundedBmi);

      let category = "";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi <= 24.9) category = "Healthy Weight";
      else if (bmi <= 29.9) category = "Overweight";
      else category = "Obesity";
      setBmiCategory(category);

      // --- BMR (Mifflin-St Jeor) ---
      let bmr = 0;
      if (gender === "male") {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
      } else {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
      }

      // --- Apply Activity Multiplier ---
      let multiplier = 1.2;
      switch (activity) {
        case "sedentary":
          multiplier = 1.2;
          break;
        case "light":
          multiplier = 1.375;
          break;
        case "moderate":
          multiplier = 1.55;
          break;
        case "active":
          multiplier = 1.725;
          break;
        case "very-active":
          multiplier = 1.9;
          break;
      }

      const totalCalories = bmr * multiplier;
      setBmrResult(totalCalories.toFixed(0));
    } else {
      setBmiResult(null);
      setBmiCategory("");
      setBmrResult(null);
    }
  };

  const today = new Date().toLocaleDateString("fr-FR", { weekday: "long" });

  return (
    <div className="training flex justify-center py-16 bg-gray-200 dark:bg-gray-900 max-lg:flex-col px-4">
      {/* Left side */}
      <div className="mr-10 max-lg:mr-0 max-lg:mb-10 w-full max-w-md">
        <h2 className="text-3xl uppercase font-bold max-sm:text-2xl mb-3">
          <span className="text-main-g">Calculate</span> Your BMI & BMR
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
          Enter your details below to calculate your Body Mass Index (BMI) and
          your daily calorie needs.
        </p>

        <form onSubmit={handleCalculate} className="space-y-4">
          <div className="flex gap-3">
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              required
              value={formData.height}
              onChange={handleInputChange}
              className="w-1/2 p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-main-g outline-none"
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              required
              value={formData.weight}
              onChange={handleInputChange}
              className="w-1/2 p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-main-g outline-none"
            />
          </div>

          <div className="flex gap-3">
            <input
              type="number"
              name="age"
              placeholder="Age"
              required
              value={formData.age}
              onChange={handleInputChange}
              className="w-1/2 p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-main-g outline-none"
            />
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleInputChange}
              className="w-1/2 p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-main-g outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* NEW: Activity level selector */}
          <select
            name="activity"
            required
            value={formData.activity}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-main-g outline-none"
          >
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (1-3 days/week)</option>
            <option value="moderate">Moderate (3-5 days/week)</option>
            <option value="active">Active (6-7 days/week)</option>
            <option value="very-active">
              Very Active (hard daily exercise)
            </option>
          </select>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-main-g text-white font-semibold rounded-md hover:bg-green-600 transition"
          >
            Calculate
          </button>
        </form>

        {bmiResult && bmrResult && (
          <div className="mt-6 p-5 rounded-md bg-white dark:bg-gray-800 shadow-md divide-y divide-gray-200 dark:divide-gray-700">
            <div className="text-center pb-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Your BMI is
              </p>
              <h3 className="text-4xl font-bold text-main-g">{bmiResult}</h3>
              <p className="text-lg font-semibold text-black dark:text-white mt-1">
                {bmiCategory}
              </p>
            </div>
            <div className="text-center pt-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Your daily calories are
              </p>
              <h3 className="text-4xl font-bold text-main-g">{bmrResult}</h3>
              <p className="text-lg font-semibold text-black dark:text-white mt-1">
                Calories/day
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Right side */}
      <div className="grid gap-3 w-full max-w-md">
        {data.schedual.map((item, idx) => (
          <div
            key={item.day}
            className={`rounded-lg p-5 text-white ${
              today === item.day.toLocaleLowerCase()
                ? "bg-green-700"
                : "bg-main-g"
            } shadow-md`}
          >
            <h3 className="font-semibold capitalize">{item.day}</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li key={idx} className="opacity-90">
                🕒 {item.hours}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
