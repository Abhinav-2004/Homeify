import { Card, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {BsArrowRightCircleFill} from "react-icons/bs";

const UserTwitterCard = () => {
  const options = [
    { name: "My Profile", link: "/profile" },
    { name: "My Orders", link: "/order" },
    { name: "My Wallets", link: "/wallet" },
  ];

  return (
    <>
      {options.map(({ name, link }) => {
        return (
          <Card isPressable isHoverable variant="bordered" css={{
            width:"250px",
            height:"63px",
            fontSize:"13px"
           }}>
          <Card.Body>
            <Text>
              <Link className="flex justify-between" to={link}>
                <div className="font-ubuntu">{name}</div>
                <div><BsArrowRightCircleFill className="h-5 w-5 text-[#FF7035]"/></div>
                </Link>
            </Text>
          </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default UserTwitterCard;
