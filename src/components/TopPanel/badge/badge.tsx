// This is the definition of those badges under the navigation bar
// You can adjust link and shield io settings here
import cofiBadges from "./badgeCofi";
import espressoBadges from "./badgeEspresso";
import exampleBadges from "./badgeExample";

interface Badge {
    link: string;
    io: string;
}
type BadgeGroup = Badge[];

// This is where you store all badge groups
interface BadgeCollections {
    cofi: BadgeGroup;
    espresso: BadgeGroup;
    example: BadgeGroup
}

const badgeCollections: BadgeCollections = {
    cofi: cofiBadges,
    espresso: cofiBadges,
    example: exampleBadges
};

export type {Badge, BadgeGroup, BadgeCollections}
export {badgeCollections}