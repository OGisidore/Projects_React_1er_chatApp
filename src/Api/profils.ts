import { createRequire } from "module";
import { Profil } from "../models/Profil";
import { User } from "../models/User";

export const profils: Profil[] = [
  {
    _id: "1",
    fullName: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Cityville",
    business_name: "ABC Company",
    phone: "555-123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    function: "CEO",
    picture: "https://example.com/john-doe.jpg",
    hours: "9am - 5pm",
    users: "20",
    website: "https://www.abccompany.com",
  },
  {
    _id: "2",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    address: "456 Elm St, Townsville",
    business_name: "XYZ Corporation",
    phone: "555-987-6543",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    function: "Marketing Manager",
    picture: "https://example.com/jane-smith.jpg",
    hours: "8:30am - 6pm",
    users: "15",
    website: "https://www.xyzcorp.com",
  },
  // Ajoutez d'autres profils ici si nécessaire

  {
    _id: "3",
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    address: "789 Oak St, Villagetown",
    business_name: "XYZ Corporation",
    phone: "555-555-5555",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    function: "Sales Representative",
    picture: "https://example.com/alice-johnson.jpg",
    hours: "10am - 4pm",
    users: "10",
    website: "https://www.xyzcorp.com",
  },
  {
    _id: "4",
    fullName: "Bob Brown",
    email: "bob.brown@example.com",
    address: "246 Pine St, Hamletville",
    business_name: "DEF Corporation",
    phone: "555-777-8888",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    function: "Software Engineer",
    picture: "https://example.com/bob-brown.jpg",
    hours: "Flexible",
    users: "5",
    website: "https://www.defcorp.com",
  },

  {
    _id: "5",
    fullName: "Emily Williams",
    email: "emily.williams@example.com",
    address: "101 Maple St, Grovetown",
    business_name: "GHI Enterprises",
    phone: "555-999-1111",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    function: "Human Resources Manager",
    picture: "https://example.com/emily-williams.jpg",
    hours: "9am - 5pm",
    users: "25",
    website: "https://www.ghi-enterprises.com",
  },
  {
    _id: "6",
    fullName: "Michael Davis",
    email: "michael.davis@example.com",
    address: "789 Cedar St, Hilltown",
    business_name: "JKL Solutions",
    phone: "555-222-3333",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    function: "Project Manager",
    picture: "https://example.com/michael-davis.jpg",
    hours: "8am - 6pm",
    users: "30",
    website: "https://www.jklsolutions.com",
  },

  {
    _id: "7",
    fullName: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    address: "555 Pine St, Valleytown",
    business_name: "LMN Enterprises",
    phone: "555-444-5555",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    function: "Sales Manager",
    picture: "https://example.com/sophia-martinez.jpg",
    hours: "9am - 5pm",
    users: "18",
    website: "https://www.lmn-enterprises.com",
  },
  {
    _id: "8",
    fullName: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    address: "789 Elm St, Hilltown",
    business_name: "OPQ Solutions",
    phone: "555-666-7777",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    function: "Software Developer",
    picture: "https://example.com/daniel-wilson.jpg",
    hours: "10am - 6pm",
    users: "12",
    website: "https://www.opqsolutions.com",
  },
  {
    _id: "9",
    fullName: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    address: "123 Oak St, Meadowville",
    business_name: "RST Corporation",
    phone: "555-888-9999",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    function: "Marketing Director",
    picture: "https://example.com/olivia-taylor.jpg",
    hours: "8:30am - 5:30pm",
    users: "22",
    website: "https://www.rstcorp.com",
  },
  {
    _id: "10",
    fullName: "William Anderson",
    email: "william.anderson@example.com",
    address: "456 Maple St, Townsville",
    business_name: "UVW Corporation",
    phone: "555-222-3333",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    function: "Financial Analyst",
    picture: "https://example.com/william-anderson.jpg",
    hours: "9am - 6pm",
    users: "17",
    website: "https://www.uvwcorp.com",
  },

  {
    _id: "11",
    fullName: "Emma Rodriguez",
    email: "emma.rodriguez@example.com",
    address: "789 Oak St, Hilltown",
    business_name: "XYZ Corporation",
    phone: "555-111-2222",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    function: "Customer Service Representative",
    picture: "https://example.com/emma-rodriguez.jpg",
    hours: "9am - 5pm",
    users: "20",
    website: "https://www.xyzcorp.com",
  },
  {
    _id: "12",
    fullName: "Ethan Garcia",
    email: "ethan.garcia@example.com",
    address: "456 Pine St, Valleytown",
    business_name: "ABC Solutions",
    phone: "555-333-4444",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    function: "Sales Associate",
    picture: "https://example.com/ethan-garcia.jpg",
    hours: "10am - 6pm",
    users: "15",
    website: "https://www.abcsolutions.com",
  },
  {
    _id: "13",
    fullName: "Ava Martinez",
    email: "ava.martinez@example.com",
    address: "123 Elm St, Meadowville",
    business_name: "LMN Corporation",
    phone: "555-555-6666",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    function: "HR Assistant",
    picture: "https://example.com/ava-martinez.jpg",
    hours: "8:30am - 5:30pm",
    users: "10",
    website: "https://www.lmncorp.com",
  },
  {
    _id: "14",
    fullName: "Noah Lopez",
    email: "noah.lopez@example.com",
    address: "789 Maple St, Hamletville",
    business_name: "PQR Enterprises",
    phone: "555-777-8888",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    function: "IT Specialist",
    picture: "https://example.com/noah-lopez.jpg",
    hours: "9am - 6pm",
    users: "12",
    website: "https://www.pqrenterprises.com",
  },
  {
    _id: "15",
    fullName: "Isabella Perez",
    email: "isabella.perez@example.com",
    address: "456 Oak St, Cityville",
    business_name: "RST Solutions",
    phone: "555-999-0000",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    function: "Project Coordinator",
    picture: "https://example.com/isabella-perez.jpg",
    hours: "9am - 5pm",
    users: "25",
    website: "https://www.rstsolutions.com",
  },
  {
    _id: "16",
    fullName: "Mason Hernandez",
    email: "mason.hernandez@example.com",
    address: "123 Maple St, Townsville",
    business_name: "UVW Corporation",
    phone: "555-222-3333",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    function: "Financial Advisor",
    picture: "https://example.com/mason-hernandez.jpg",
    hours: "8am - 6pm",
    users: "17",
    website: "https://www.uvwcorp.com",
  },

  {
    _id: "17",
    fullName: "Liam Garcia",
    email: "liam.garcia@example.com",
    address: "789 Elm St, Valleytown",
    business_name: "XYZ Solutions",
    phone: "555-111-2222",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    function: "Customer Support Specialist",
    picture: "https://example.com/liam-garcia.jpg",
    hours: "9am - 5pm",
    users: "20",
    website: "https://www.xyzsolutions.com",
  },
  {
    _id: "18",
    fullName: "Charlotte Martinez",
    email: "charlotte.martinez@example.com",
    address: "456 Oak St, Meadowville",
    business_name: "ABC Enterprises",
    phone: "555-333-4444",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    function: "Sales Executive",
    picture: "https://example.com/charlotte-martinez.jpg",
    hours: "10am - 6pm",
    users: "15",
    website: "https://www.abcenterprises.com",
  },
  {
    _id: "19",
    fullName: "Amelia Wilson",
    email: "amelia.wilson@example.com",
    address: "123 Pine St, Hamletville",
    business_name: "LMN Solutions",
    phone: "555-555-6666",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    function: "HR Manager",
    picture: "https://example.com/amelia-wilson.jpg",
    hours: "8:30am - 5:30pm",
    users: "10",
    website: "https://www.lmnsolutions.com",
  },
  {
    _id: "20",
    fullName: "James Rodriguez",
    email: "james.rodriguez@example.com",
    address: "789 Maple St, Cityville",
    business_name: "PQR Corporation",
    phone: "555-777-8888",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    function: "IT Consultant",
    picture: "https://example.com/james-rodriguez.jpg",
    hours: "9am - 6pm",
    users: "12",
    website: "https://www.pqrcorp.com",
  },
  {
    _id: "21",
    fullName: "Grace Lopez",
    email: "grace.lopez@example.com",
    address: "456 Elm St, Townsville",
    business_name: "RST Enterprises",
    phone: "555-999-0000",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    function: "Marketing Specialist",
    picture: "https://example.com/grace-lopez.jpg",
    hours: "9am - 5pm",
    users: "25",
    website: "https://www.rstenterprises.com",
  },
  {
    _id: "22",
    fullName: "Benjamin Taylor",
    email: "benjamin.taylor@example.com",
    address: "123 Oak St, Hilltown",
    business_name: "UVW Solutions",
    phone: "555-222-3333",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    function: "Financial Planner",
    picture: "https://example.com/benjamin-taylor.jpg",
    hours: "8am - 6pm",
    users: "17",
    website: "https://www.uvwsolutions.com",
  },
  {
    _id: "23",
    fullName: "Alexander Hernandez",
    email: "alexander.hernandez@example.com",
    address: "789 Pine St, Valleytown",
    business_name: "DEF Corporation",
    phone: "555-444-5555",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    function: "Software Tester",
    picture: "https://example.com/alexander-hernandez.jpg",
    hours: "9am - 5pm",
    users: "20",
    website: "https://www.defcorp.com",
  },
  {
    _id: "24",
    fullName: "Mia Brown",
    email: "mia.brown@example.com",
    address: "456 Cedar St, Meadowville",
    business_name: "GHI Corporation",
    phone: "555-333-2222",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    function: "Sales Consultant",
    picture: "https://example.com/mia-brown.jpg",
    hours: "10am - 6pm",
    users: "15",
    website: "https://www.ghicorp.com",
  },
  {
    _id: "25",
    fullName: "Lucas Perez",
    email: "lucas.perez@example.com",
    address: "123 Elm St, Cityville",
    business_name: "JKL Enterprises",
    phone: "555-777-9999",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    function: "IT Support Specialist",
    picture: "https://example.com/lucas-perez.jpg",
    hours: "8:30am - 5:30pm",
    users: "10",
    website: "https://www.jklenterprises.com",
  },
  {
    _id: "26",
    fullName: "Zoe Taylor",
    email: "zoe.taylor@example.com",
    address: "789 Cedar St, Hamletville",
    business_name: "MNO Solutions",
    phone: "555-888-7777",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    function: "HR Coordinator",
    picture: "https://example.com/zoe-taylor.jpg",
    hours: "9am - 6pm",
    users: "12",
    website: "https://www.mnosolutions.com",
  },
  {
    _id: "27",
    fullName: "Elijah Anderson",
    email: "elijah.anderson@example.com",
    address: "456 Maple St, Townsville",
    business_name: "PQR Solutions",
    phone: "555-999-8888",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    function: "Software Engineer",
    picture: "https://example.com/elijah-anderson.jpg",
    hours: "9am - 5pm",
    users: "25",
    website: "https://www.pqrsolutions.com",
  },
  {
    _id: "28",
    fullName: "Scarlett Hernandez",
    email: "scarlett.hernandez@example.com",
    address: "123 Pine St, Valleytown",
    business_name: "RST Enterprises",
    phone: "555-222-3333",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    function: "Marketing Coordinator",
    picture: "https://example.com/scarlett-hernandez.jpg",
    hours: "8am - 6pm",
    users: "17",
    website: "https://www.rstenterprises.com",
  },
];

