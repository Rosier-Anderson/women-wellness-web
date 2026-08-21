import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: 1,
    value: "membership",
    trigger: "What memberships do you offer?",
    content:
      "We offer flexible membership options designed for every fitness level, including strength training, group wellness classes, personal coaching, and holistic fitness programs. Choose a plan that fits your goals and lifestyle.",
  },
  {
    id: 2,
    value: "beginner",
    trigger: "Is this gym suitable for beginners?",
    content:
      "Absolutely. Our women-focused gym welcomes all fitness levels. Our certified trainers provide guidance, support, and personalized routines to help you build confidence and reach your goals safely.",
  },
  {
    id: 3,
    value: "classes",
    trigger: "What wellness classes do you offer?",
    content:
      "We offer a variety of classes including strength training, yoga, mobility sessions, cardio workouts, flexibility training, and wellness programs designed to improve your energy, confidence, and overall health.",
  },
  {
    id: 4,
    value: "personal-training",
    trigger: "Do you provide personal training?",
    content:
      "Yes, our personal training programs are customized to your fitness goals, whether you want to build strength, lose weight, improve endurance, or create a healthier lifestyle with expert guidance.",
  },
  {
    id: 5,
    value: "nutrition",
    trigger: "Do you provide nutrition guidance?",
    content:
      "We provide wellness-focused nutrition support to help you develop healthy eating habits, improve your energy levels, and complement your fitness journey with balanced lifestyle choices.",
  },
];
export default function AccordionMultiple() {
  return (
    <Accordion multiple className="flex flex-col items-center ">
      {items.map((item) => (
        <AccordionItem
          className="flex flex-col justify-center bg-secondary m-1 p-4 rounded-2xl w-sm sm:w-3xl min-h-20"
          key={item.value}
          value={item.value}
        >
          <AccordionTrigger className="flex gap-4 items-center">
            <span className="text-xl sm:text-2xl text-primary">0{item.id}</span>
            <h1 className="text-xl">{item.trigger}</h1>
          </AccordionTrigger>
          <AccordionContent>
            <p className="">{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
