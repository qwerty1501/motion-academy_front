import HomeLayout from "../components/HomeLayout";
import ClubHero from "../components/IT-Club/ClubHero";
import ClubMision from "../components/IT-Club/ClubMision";
import ClubFormats from "../components/IT-Club/ClubFormats/ClubFormats";
import ClubTravel from "../components/IT-Club/ClubTravel";
import ClubApplication from "../components/IT-Club/ClubApplication";

export default function ItClub() {
    return (
        <HomeLayout>

            <ClubHero/>
            <ClubMision/>
            <ClubFormats/>
            <ClubTravel/>
            <ClubApplication/>
        </HomeLayout>
    )
}
