import React from "react";
import VerticalNavbar from "../../Components/VerticalNavbar/VerticalNavbar";
import SingleCategory from "../../Components/SingleCategory/SingleCategory";
import Navbar from "../../Components/Navbar/Navbar";

const categoriesData = [
  {
    id: 1,
    name: "Javed Habib Hair & Beauty",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate praesentium reprehenderit?",
    phone: "+91 123454321",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReb1qLAtXPwBCDj-T4NDEk-QjILGbnYlwi_xyHWSFVvLNiUiXih05TUiwapmqoAvKcBFI&usqp=CAU",
  },
  {
    id: 2,
    name: "LookWell",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate praesentium repreh",
    phone: "+91 987654321",
    icon: "https://www.lookwellsalon.com/images/logo.png", 
  },
  {
    id: 3,
    name: "Glamorous Glow Spa & Salon",
    address: "456 Beauty Boulevard, Glam City",
    phone: "+91 789012345",
    icon: "https://t4.ftcdn.net/jpg/02/54/65/25/360_F_254652548_H0aqOFWqeQ9DGo677K537Ej8vGf992cH.jpg", 
  },
  {
    id: 4,
    name: "Elegance Salon & Spa",
    address: "789 Elegant Avenue, Stylishville",
    phone: "+91 345678901",
    icon: "https://cdn.dribbble.com/users/2984251/screenshots/16200026/media/5f404ede522388e2e56976dad9c265f1.jpg?resize=400x300&vertical=center",
  },
  {
    id: 5,
    name: "Urban Charm Hair Studio",
    address: "567 Chic Street, Urban City",
    phone: "+91 234567890",
    icon: "https://images-platform.99static.com/2iuTglWRLGIIDovgRqbXpu5cwGk=/130x130:1171x1171/500x500/top/smart/99designs-contests-attachments/109/109120/attachment_109120057",
  },
];

const SingleCategoryPage = () => {
  return (
    <div>
      <VerticalNavbar />
      <Navbar />
      {categoriesData.map((category) => (
        <SingleCategory
          key={category.id}
          icon={category.icon}
          name={category.name}
          address={category.address}
          phone={category.phone}
        />
      ))}
    </div>
  );
};

export default SingleCategoryPage;
