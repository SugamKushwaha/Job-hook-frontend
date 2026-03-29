import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

const fields = [
  {
    label: "Job Title",
    placeholder: "Enter Job Title",
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
    value: "Software Engineer",
    leftSection: IconBriefcase,
  },
  {
    label: "Company",
    placeholder: "Enter Company Name",
    options: [
      "Google",
      "Microsoft",
      "Meta",
      "Netflix",
      "Adobe",
      "Facebook",
      "Amazon",
      "Apple",
      "Spotify",
      "Value",
      "Google",
    ],
    leftSection: IconBriefcase,
  },
  {
    label: "Location",
    placeholder: "Enter Job Location",
    options: [
      "Delhi",
      "New York",
      "San Francisco",
      "London",
      "Berlin",
      "Tokyo",
      "Sydney",
      "Toronto",
    ],
    value: "New York, United States",
    leftSection: IconMapPin,
  },
];

export default fields;

export const certifications = [
  {
    name: "Java Backend Development",
    issuer: "Coursera",
    issueDate: "Jan 2024",
    certificateId: "ABC123XYZ"
  },
  {
    name: "React Developer Certification",
    issuer: "Udemy",
    issueDate: "Mar 2023",
    certificateId: "REACT789"
  }
];