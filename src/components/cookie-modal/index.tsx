'use client'

import { XIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useCookieModal } from "./useCookieModal";

export function CookieModal() {
  const {
    checkbox,
    showModal,
    showManagePanel,
    setShowManagePanel,
    handleCheckboxChange,
    acceptPartialCookies,
    acceptAllCookies,
    closeModal } = useCookieModal()

  if (!showModal) {
    return <></>
  }

  return (
    <div className="fixed bottom-0 w-full z-10 bg-[#fff] border-t border-[#ccc] py-5 px-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold italic">This website uses cookies.</span>
          <Button variant="ghost" onClick={closeModal}>
            <XIcon size={24} />
          </Button>
        </div>
        {
          !showManagePanel ? (
            <div className="flex flex-col gap-4">
              <p className="leading-5">We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We also share information about your use of our site with our social media advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.</p>
              <div className="flex items-center gap-2 justify-center">
                <Button className="bg-[#f6a404] rounded-lg h-[50px] italic px-7 hover:bg-orange-500" onClick={acceptAllCookies}>Accept All</Button>
                <Button className="bg-[#dadada] rounded-lg h-[50px] text-black px-7 hover:bg-gray-300" onClick={() => setShowManagePanel(true)}>Manage</Button>
              </div>
            </div>
          ) : (
            <ManageCookiePanel checkbox={checkbox} handleCheckboxChange={handleCheckboxChange} acceptPartialCookies={acceptPartialCookies} acceptAllCookies={acceptAllCookies} />
          )
        }
      </div>
    </div>
  )
}

// Composing component
type CookiePanelProps = {
  checkbox: {
    statistics_cookie: boolean,
    preferences_cookie: boolean,
    marketing_cookie: boolean,
  },
  handleCheckboxChange: (name: string) => (checked: boolean) => void,
  acceptPartialCookies: () => void,
  acceptAllCookies: () => void
}

function ManageCookiePanel({ checkbox, handleCheckboxChange, acceptPartialCookies, acceptAllCookies }: CookiePanelProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        {/* Necessary cookie */}
        <Accordion type="single" collapsible className="w-full">
          <div className="flex items-center gap-x-4">
            <AccordionItem value="item-1" className="flex-1">
              <AccordionTrigger className="text-lg italic">Necessary</AccordionTrigger>
              <AccordionContent className="pt-3">
                Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website.
                The website cannot function properly without these cookies.
              </AccordionContent>
            </AccordionItem>
            <Checkbox name="necessary" checked disabled />
          </div>
        </Accordion>
        {/* Statistics cookie */}
        <Accordion type="single" collapsible className="w-full">
          <div className="flex items-center gap-x-4">
            <AccordionItem value="item-2" className="flex-1">
              <AccordionTrigger className="text-lg italic">Statistics</AccordionTrigger>
              <AccordionContent className="pt-3">
                Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.
              </AccordionContent>
            </AccordionItem>
            <Checkbox name="statistics" checked disabled />
          </div>
        </Accordion>
        {/* Preferences cookie */}
        <Accordion type="single" collapsible className="w-full">
          <div className="flex items-center gap-x-4">
            <AccordionItem value="item-3" className="flex-1">
              <AccordionTrigger className="text-lg italic">Preferences</AccordionTrigger>
              <AccordionContent className="pt-3">
                Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.
              </AccordionContent>
            </AccordionItem>
            <Checkbox name="preferences" checked={checkbox.preferences_cookie} onCheckedChange={handleCheckboxChange("preferences_cookie")} />
          </div>
        </Accordion>
        {/* Marketing cookie */}
        <Accordion type="single" collapsible className="w-full">
          <div className="flex items-center gap-x-4">
            <AccordionItem value="item-4" className="flex-1">
              <AccordionTrigger className="text-lg italic">Marketing</AccordionTrigger>
              <AccordionContent className="pt-3">
                Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant
                and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
              </AccordionContent>
            </AccordionItem>
            <Checkbox id="marketing" name="marketing" checked={checkbox.marketing_cookie} onCheckedChange={handleCheckboxChange("marketing_cookie")} />
          </div>
        </Accordion>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <Button className="bg-[#dadada] rounded-lg h-[50px] text-black px-7 hover:bg-gray-300" onClick={acceptPartialCookies}>Accept Selection</Button>
        <Button className="bg-[#f6a404] rounded-lg h-[50px] italic px-7 hover:bg-orange-500" onClick={acceptAllCookies}>Accept All</Button>
      </div>
    </div>
  )
}