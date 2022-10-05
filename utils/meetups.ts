import istanbul from "../public/meetup_place_images/Istanbul_asv2020-02_img12_Sirkeci_Terminal.jpg";
import bangkok from "../public/meetup_place_images/Templo_Wat_Arun,_Bangkok,_Tailandia,_2013-08-22,_DD_37.jpg";
import brussels from "../public/meetup_place_images/Garden_of_Kunstberg_viewed_from_Mont_des_Arts_during_nautical_twilight_(DSCF1028).jpg";
import seul from "../public/meetup_place_images/COEX_as_seen_from_Bongeunsa_temple.jpg";
import { IMeetup } from "../types";

export const meetups:IMeetup[] = [
    {
        id:"m1",
        title:"Sirkeci railway terminal",
        image:istanbul,
        address:"Istanbul/Turkey",
        description:"Interior of the Sirkeci railway terminal"
    },
    {
        id:"m2",
        title:"Wat Arun",
        image:bangkok,
        address:"Bangkok",
        description:"a temple situated in the city of Bangkok"
    },
    {
        id:"m3",
        title:"Brussels Capital Region",
        image:brussels,
        address:"Brussels/Belgium",
        description:"Belgium capital"
    },
    {
        id:"m4",
        title:"Bongeunsa temple",
        image:seul,
        address:"Seoul/Korea",
        description:"a Buddhist temple"
    },
];