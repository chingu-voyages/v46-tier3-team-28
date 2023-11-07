"use client";
import React from 'react'
import {ContactCard} from "@/components/contact-card/ContactCard";

function page() {
    return (
        <div className={"flex-row"}>
            <ContactCard
                name="Reckson Zirsangzela Khiangte"
                avatarUrl="https://avatars.githubusercontent.com/u/35249409?v=4"
                job="Fullstack Engineer"
            />

            <ContactCard
                name="Ju Li"
                avatarUrl="https://avatars.githubusercontent.com/u/118463407?v=4"
                job="Frontend Engineer"
            />

            <ContactCard
                name="Victor Fedorov"
                avatarUrl="https://avatars.githubusercontent.com/u/71446920?v=4"
                job="Frontend Engineer"
            />

            <ContactCard
                name="Christian"
                avatarUrl="https://avatars.githubusercontent.com/u/140526893?v=4"
                job="Frontend Engineer"
            />
        </div>

    )
}

export default page