import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutMePage = () => {
  return (
    <div className="max-w-screen-xl container mx-auto px-4 md:px-16 py-8 space-y-4">
      <div className="flex gap-6 items-start">
        <div className="space-y-8 flex-2/3">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold md:text-4xl">About Me</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Hello! I'm Pradhuman Shrestha. Full-Stack Web Developer From
              Japan. I am passionate about Web Designing & Development. I have 5
              years rich experience in web development, also I'm good at
              WordPress, And Magento. I love to talk with you about our unique.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold md:text-4xl">Experience</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base md:text-2xl">
                    Magento EC Site Developer, Veriteworks Inc, Japan
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base text-foreground">
                    <div className="flex items-center">
                      <CalendarIcon className="size-4 mr-1.5" />
                      2020-10 ~ 2023-11
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base md:text-lg">
                    Developing, and hosting Magento based e-commerce websites.
                    Building modules, themes, and troubleshooting the bugs.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-sm md:text-base text-muted-foreground">
                    Used Tech:- PHP, Magento, HTML, CSS, Javascript, AWS,
                    Elasticsearch, CodeCommit, Excel, Slack And Redmine.
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base md:text-2xl">
                    EC Site Developer, Realpit, Japan
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    <div className="flex items-center text-foreground">
                      <CalendarIcon className="size-4 mr-1.5" />
                      2023-11 ~ Till Current
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base md:text-lg">
                    Build client ecommerce website using company saas product,
                    host server on AWS and deploy to it.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-sm md:text-base text-muted-foreground">
                    Used Tech:- PHP, Laravel, Javascript, AWS, Bitbucket, Excel
                    And Teams.
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex-1/3">
          <Image
            src={"/profile1.jpg"}
            alt="profile image"
            height={600}
            width={300}
            priority
            className="object-cover h-full w-full shadow border rounded-2xl"
            quality={90}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
