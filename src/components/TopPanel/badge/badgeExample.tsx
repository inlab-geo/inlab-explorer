import { Badge, BadgeGroup } from "./badge";

const github: Badge = {
  link: "https://github.com/inlab-geo/cofi-examples",
  io: "https://img.shields.io/badge/Download%20from-GitHub-171515?logo=github&labelColor=f8f9fa&style=flat-square&logoColor=171515",
};

const colab: Badge = {
  link: "https://colab.research.google.com/github/inlab-geo/cofi-examples/blob/main/index.ipynb",
  io: "https://camo.githubusercontent.com/e87d1181750c2ce4fd53f47f8b412c0cc7090d94620f43bba2d852ebfd9166e0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6f70656e253230696e2d436f6c61622d6235653266613f6c6f676f3d676f6f676c65636f6c6162267374796c653d666c61742d73717561726526636f6c6f723d666664363730266c6162656c436f6c6f723d663866396661",
};

const mybinder: Badge = {
  link: "https://mybinder.org/v2/gh/inlab-geo/cofi-examples/main?filepath=index.ipynb",
  io: "https://camo.githubusercontent.com/a30100fe6370cf853f9ee51d27f94ed687986db0daee053e77cac9df4c5ba22a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c61756e63682d42696e6465722d4536363538312e7376673f6c6f676f3d646174613a696d6167652f706e673b6261736536342c6956424f5277304b47676f414141414e535568455567414141466b414141425a43414d41414142693158696441414142386c424d5645582f2f2f39586d73726d5a5948316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4c316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4c316f6c4a586d73726d5a5948316f6c4a586d7372316f6c4c316f6c4a586d73726d5a5948316f6c4c316f6c4a586d73726d5a5948316f6c4c316f6c4c306e4666316f6c4a586d73726d5a5948316f6c4a586d737138645a62316f6c4a586d73726d5a5948316f6c4a586d7370586d7370586d7372316f6c4c316f6c4a586d73726d5a5948316f6c4a586d7372316f6c4c316f6c4a586d73726d5a5948316f6c4c316f6c4c65614956586d73726d5a5948316f6c4c316f6c4c316f6c4a586d73726d5a5948316f6c4c6e613331586d7372316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4c716f5672316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4c316f6c4b6b6661506f6258767669476162676164586d737154684b756f664b486d5a34446f626e72316f6c4a586d7372316f6c4a586d7370586d7372316f6c4a586d7372665a34547568576e316f6c4c316f6c4a586d737142693758316f6c4a586d73705a6d736c626d4d68626d7364656d7356666c385a676d734e696d384a706b3846306d3752346d3746356e4c42366a6268376a62694469724f4569624f476e4b614d68712b506e6143566736715767367165674b6166663657686e704b6f664b47746e6f6d78655a79336e6f4736645a692b6e33764363705044637050476e33624c62342f4d6234375562497256613472596f476a6461496265614958686f57486d5a59486f6258767063486a716448587265484c726f56727366472f7568476e75683262776a3248786b3137796c31767a6d6c6a7a6d316a306e6c58316f6c4c33414a58574141414162585253546c4d414542415148783867494341754c6a41774d447739505542415145705155464258563168675947426b6348427763586c3867494341676f69496b4a43516c4a69636e4a32676f4b436d714b2b77734c433475734441774d6a50304e4451314e6257334e7a67344f4469352b337638504477382f54303950583239766233392f66352b6672372b2f7a382f507a392f76372b7a637a43786741414243354a524546556541484e31756c336b3055554276436231435456706d706169744147534c537053754b434c577062544b4e4a46476c63534d414646363369556d5263634e4736674c6275786b585536364a415565662f394c53706d586e794c72335435414f2f727a6c357a6a31333770313336424953793434664b4a5875474e2f64313950556659654f36375a6e717466324b4833334964317073586f466457333073505a31734d767332443036304148717773344648654a6f6a4c5a716e773533636d6676672b5852386d43304f456a75787258456b5835796465564a4c56496c563065313050586b356b37645965487537436a316a2b3439754b6737754c55363174474c77316c713237756751596c636c4843346267763756512b5441796a355a632f556a735076733173643563577279574f6274765754324550613472746e5757334a6b706a67674570624f73507237463745794e657774704249736c41377034334843736e776f6f5854456333556d506d434e6e356c7271544a7879366e526d636176475a56742f334461327044354e4876734f484a43726463314732723344495470553779696337772f3752786e6a63306b7435474334646a697632537a3346623269455a6734312f64647346446f79755972496b6d4665687a304852327468506751714d79515962324f7442305778735a33426547332b7770526231767a6c325559426f6738466647687474464b6a7441636c6e5a5972526f397279473975472f465a515534414567385a45394c6a474d7a546d714b58504c6e6c57566e496c51515476784a663869703756676a5a6a795650726a77317465356f744d37526d5037786d2b734b32477639493847692b2b425262456b5239454277387a5255634b7877703733786b614c697151622b6b4764754a544e484737327a6357394c6f4a677151787050332f546a2f2f633379423074717a616d6c30352f2b6f72484c6b73564f2b39356b58372f3771674a766e6a6c72667232476773797830656f793975507a4e355350643836615867674f73454b573250727a37647533564944332f747a732f735352733277376f7656484b746a7258327064375a4d6c547841596642414c396a694477664c6b713535546d376966684d6c5447507943417337524652686e34374a6e6c634239524d355439374153755a584963564e755544496e647044626473667271734f707065586c35592b58564b646a464354682b7a476156756a3064397a79303550504b33517a42616d786477745443727a79672f3252766632457374556a6f72644777612f6b78396d534a4c72386d4c4c744357384848474a63325235685332313949694636506e5475734f71634d6c3537676d305a386b616e4b4d41516730715379755a666e377a4974736247794f39516c6e7859306543754431584c3279732f4d737251686c74453755673075464f7a75664a4645325078426f2f59417838585050644477574e304d72445259495a46306d534d4b434e4867614956466f42624e6f4c4a37744551444b784746306b634c51696d6f6a435a6f7076304f6b4e4f795743436739584d5641693741524a7a51644d3251556830676d426f7a6a6333536b6736645342527144475953554f7536365a672b4932664e5a732f4d332f662f47726c2f586e794631477733564b43657a30504e35495566464c717667554e344330714e715973355968504c2b61565a594445344970556b35376f53466e4a6d3446794371714f45306a685932534d794c466f6f35367a796f366265634f5335555644646a37566968307a702b74634d6877527042654c797174496a6c4a4b41495a5362493853475346336b307041336d52357448757750466f61374e3772656f713262714373416b314871437535757649316e364a755258492b53314d636f3534596d595477636e36416569632b6b73735869385870584334563374372f414475544e4b61514a6453634141414141456c46546b5375516d4343267374796c653d666c61742d737175617265266c6162656c436f6c6f723d66386639666126636f6c6f723d666661666363",
};

const readthedocs: Badge = {
  link: "https://cofi.readthedocs.io/en/latest/examples/generated/index.html",
  io: "https://camo.githubusercontent.com/3333f4055d8b342889f3cc52662bea1a26f3e8e19d426f9ea98cbaa585b2c659/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f4649253230646f63732d4578616d706c6525323047616c6c6572792d6262643066663f7374796c653d666c61742d737175617265266c6162656c436f6c6f723d663866396661266c6f676f3d72656164746865646f6373266c6f676f436f6c6f723d626264306666",
};

const exampleBadges: BadgeGroup = [github, colab, mybinder, readthedocs];
export default exampleBadges;
