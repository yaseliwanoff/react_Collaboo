import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Chat from "@/assets/images/svg/Chat.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Textarea } from "@/components/ui/textarea";
import { Link } from 'react-router-dom';
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const HelpTicket: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tickets');

  const handleProfileClick = () => {
    setActiveTab('Tickets');
  };

  return (
    <section className="bg-[#FBFBFB] text-[#1B1B1B]">
      <div className="container pt-[55px]">
        <div className="w-full flex items-center pt-10 mb-8 justify-between">
          <h1 className="font-semibold text-[30px]">Helpdesk</h1>
          <div className='hidden lg:flex'>
            <Link to={"/help-ticket-create"}>
              <Button variant={"default"} className="ml-auto">
                <span>
                  <img src={Chat} alt="icon" />
                </span>
                <span>Submit new ticket</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:flex h-screen text-[Inter]">
          <aside className="w-1/5 hidden lg:flex flex-col text-[14px]">
            <Link to={"/help"}>
              <button 
                className="button-sidebar" 
                onClick={handleProfileClick}
              >
                Tickets
              </button>
            </Link>
          </aside>
          <aside className="flex lg:hidden">
            <Tabs defaultValue="all" className="w-full mb-6" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-1">
                      <Link to={"/help"}>
                        <TabsTrigger className='w-full' value="all" onClick={handleProfileClick}>Tickets</TabsTrigger>
                      </Link>
                    </TabsList>
                  </Tabs>
          </aside>
          <div className='flex lg:hidden'>
            <Link to={"/help-ticket-create"} className="w-full">
              <Button variant={"full_dark"} className="w-full">
                <span>
                  <img src={Chat} alt="icon" />
                </span>
                <span>Submit new ticket</span>
              </Button>
            </Link>
          </div>
          <div className="lg:w-4/5">
            {activeTab === 'Tickets' && (
              <>
                <div className='py-2'>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/help">Helpdesk</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/help">Tickets</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Security Concern: Suspicious Activity on My Account and i don’t know what to do!</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
                <div>
                  <h2 className='text-[20px] font-semibold mt-4'>Security Concern: Suspicious Activity on My Account and i don’t know what to do!</h2>
                  <div className='mt-6'>
                    <h5 className='font-medium text-[14px] mb-2'>Message</h5>
                    <Textarea style={{
                      resize: "none",
                      height: "115px",
                    }} placeholder="Enter your text here…" />
                    <div className='flex justify-end mt-4'>
                      <Button variant={"default"}>Send</Button>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <div className='py-4 border-b border-[#E5E7EB]'>
                    <div className='flex justify-between items-center'>
                      <span className='font-semibold text-[14px]'>((Username))</span>
                      <span className='text-[#71717A] text-[14px] pl-6'>12:12 AM</span>
                    </div>
                    <div className='mt-1'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                    </div>
                  </div>
                  <div className='py-4 border-b border-[#E5E7EB]'>
                    <div className='flex justify-between items-center'>
                      <span className='font-semibold text-[14px]'>((Username))</span>
                      <span className='text-[#71717A] text-[14px] pl-6'>11:32 AM</span>
                    </div>
                    <div className='mt-1'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                    </div>
                  </div>
                  <div className='py-4 border-b border-[#E5E7EB]'>
                    <div className='flex justify-between items-start'>
                      <div className='flex flex-col text-right ml-auto'>
                        <span className='font-semibold text-[14px] text-[#DC2626]'>Support Team</span>
                        <p className='mt-1 w-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                      </div>
                      <div className='flex items-center pl-6'>
                        <span className='text-[#71717A] text-[14px] whitespace-nowrap'>11:30 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className='py-4 border-b border-[#E5E7EB]'>
                    <div className='flex justify-between items-center'>
                      <div className='flex flex-col text-right ml-auto'>
                        <span className='font-semibold text-[14px] text-[#DC2626]'>Support Team</span>
                        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                      </div>
                      <div className='flex items-center pl-6'>
                        <span className='text-[#71717A] text-[14px] pl-6 whitespace-nowrap'>11:30 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className='py-4 border-b border-[#E5E7EB]'>
                    <div className='flex justify-between items-center'>
                      <span className='font-semibold text-[14px]'>((Username))</span>
                      <span className='text-[#71717A] text-[14px] pl-6'>11:32 AM</span>
                    </div>
                    <div className='mt-1'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpTicket;
