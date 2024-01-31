import { Badge, BadgeGroup } from "./badge";

const github: Badge = {
  link: "https://github.com/inlab-geo/espresso",
  io: "https://img.shields.io/badge/GitHub-espresso-171515?logo=github&labelColor=f8f9fa&style=flat-square&logoColor=171515",
};

const pypi: Badge = {
  link: "https://pypi.org/project/cofi/",
  io: "https://img.shields.io/pypi/v/geo-espresso?logo=pypi&style=flat-square&color=bde0fe&labelColor=f8f9fa",
};

const workflows: Badge = {
  link: "https://github.com/inlab-geo/espresso/actions/workflows/build_wheels.yml",
  io: "https://img.shields.io/github/actions/workflow/status/inlab-geo/espresso/build_wheels.yml?branch=main&logo=githubactions&style=flat-square&color=ccd5ae&labelColor=f8f9fa",
};

const readthedocs: Badge = {
  link: "https://geo-espresso.readthedocs.io/en/latest/?badge=latest",
  io: "https://img.shields.io/readthedocs/geo-espresso?logo=readthedocs&style=flat-square&color=fed9b7&labelColor=f8f9fa&logoColor=eaac8b",
};

const slack: Badge = {
  link: "https://join.slack.com/t/inlab-community/shared_invite/zt-1ejny069z-v5ZyvP2tDjBR42OAu~TkHg",
  io: "https://img.shields.io/badge/Slack-InLab_community-4A154B?logo=slack&style=flat-square&color=cdb4db&labelColor=f8f9fa&logoColor=9c89b8",
};

const espressoBadges: BadgeGroup = [
  github,
  pypi,
  workflows,
  readthedocs,
  slack,
];
export default espressoBadges;
