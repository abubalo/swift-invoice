import React from "react";
import Card from "../components/Card";
import EarningsChart from "../components/EarningsChart";
import TemplateCard from "../components/TemplateCard";
import Nav from "../components/Nav";
import {
  InvoiceIcon,
  LoveIcon,
  MoneyIcon,
  UserIcon,
} from "@/components/icons/Icons";
import TransactionHistory from "../components/TransactonHistrory";
import Activites from "../components/Activites";
import Filter from "@/components/Filter";

const Dashboard = () => {
  return (
    <>
      <div className="p-4 space-y-6">
        <Nav />
        <div className="space-y-6">
          <div
            id=""
            className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4"
          >
            <Card
              title={"Total Revenue"}
              content={"$20,894.00"}
              icon={<MoneyIcon />}
              stats={"+10% increase from last month"}
            />
            <Card
              title={"Invoices"}
              content={"2,345"}
              icon={<InvoiceIcon />}
              stats={"15% increase from last month"}
            />
            <Card
              title={"Clients"}
              content={"1,279"}
              icon={<UserIcon />}
              stats={"9% increase from last month"}
            />
            <Card
              title={"Loyalty"}
              content={"70%"}
              icon={<LoveIcon />}
              stats={"10% drop from last month"}
            />
          </div>

          <div className="flex flex-col gap-2 mt-8 lg:flex-row lg:gap-3">
            <EarningsChart />
            <TemplateCard />
          </div>
          <div className="flex gap-5 justify-between">
            <Activites />
            <TransactionHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
