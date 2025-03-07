'use server'
import { Replace } from "lucide-react";
import { permanentRedirect, redirect, RedirectType } from "next/navigation";

export async function SubmitForm(formData: FormData){

    const rawFormData = {
        "entry.591007344" : formData.get('entry.591007344'),
        "entry.6308228" : formData.get('entry.6308228'),
        "entry.1464536718" : formData.get('entry.1464536718'),
        "entry.693017067" : formData.get('entry.693017067'),
        "entry.527693847" : formData.get('entry.527693847'),
        "entry.698573846" : formData.get('entry.698573846'),
    }
    const queryString = Object.entries(rawFormData)
    .filter(([, value]) => value !== null && value !== undefined) // Filter out null and undefined values
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`) // Cast value to string
    .join('&');

    await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSdwjMdXbAiwNpeL90O96y4XaaUMBO3Cu1CW5eBiUFlGavyW6A/formResponse?${queryString}`);

    permanentRedirect('https://www.spmandlalans.com/lp/thank-you?trackingAds=done', 'replace' as RedirectType)
     // Return a JSON response with the URL
//    { redirectUrl: "https://www.spmandlalans.com/lp/thank-you" };

}