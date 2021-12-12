enum Membership {
    Simple,
    Standart,
    Premium
}

const membershio = Membership.Premium;
const membershipReverse = Membership[1];
console.log(membershio);
console.log(membershipReverse);

enum SocialMedia {
    Vkontacte = 'VK',
    Facebook = 'FB',
    Instagram = 'INSTA'
}

const social = SocialMedia.Facebook;
console.log(social);