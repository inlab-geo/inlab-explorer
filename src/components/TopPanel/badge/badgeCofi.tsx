import { Badge, BadgeGroup } from "./badge";

const github: Badge = {
  link: "https://github.com/inlab-geo/cofi",
  io: "https://img.shields.io/badge/GitHub-cofi-171515?logo=github&labelColor=f8f9fa&style=flat-square&logoColor=171515",
};

const pypi: Badge = {
  link: "https://pypi.org/project/cofi/",
  io: "https://img.shields.io/pypi/v/cofi?logo=pypi&style=flat-square&color=cae9ff&labelColor=f8f9fa",
};

const condaForge: Badge = {
  link: "https://anaconda.org/conda-forge/cofi",
  io: "https://img.shields.io/conda/vn/conda-forge/cofi.svg?logo=condaforge&style=flat-square&color=cce3de&labelColor=f8f9fa&logoColor=344e41",
};

const readthedocs: Badge = {
  link: "https://cofi.readthedocs.io/en/latest/?badge=latest",
  io: "https://img.shields.io/readthedocs/cofi?logo=readthedocs&style=flat-square&color=fed9b7&labelColor=f8f9fa&logoColor=eaac8b",
};

const app: Badge = {
  link: "https://app.codecov.io/gh/inlab-geo/cofi",
  io: "https://img.shields.io/codecov/c/github/inlab-geo/cofi?logo=pytest&style=flat-square&token=T8R9VKM4D7&color=ffcad4&labelColor=f8f9fa&logoColor=ff99c8",
};

const cofiBadges: BadgeGroup = [github, pypi, condaForge, readthedocs, app];
export default cofiBadges;
