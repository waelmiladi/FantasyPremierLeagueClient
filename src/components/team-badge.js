import React, { PropTypes } from 'react';
import arsenal from '../images/badges/arsenal.svg';
import bournemouth from '../images/badges/bournemouth.svg';
import burnley from '../images/badges/burnley.svg';
import chelsea from '../images/badges/chelsea.svg';
import crystalPalace from '../images/badges/crystal-palace.svg';
import everton from '../images/badges/everton.svg';
import hullCity from '../images/badges/hull-city.svg';
import leicesterCity from '../images/badges/leicester-city.svg';
import liverpool from '../images/badges/liverpool.svg';
import manCity from '../images/badges/man-city.svg';
import manUnited from '../images/badges/man-united.svg';
import middlesborough from '../images/badges/middlesborough.svg';
import southampton from '../images/badges/southampton.svg';
import stokeCity from '../images/badges/stoke-city.svg';
import sunderland from '../images/badges/sunderland.svg';
import swanseaCity from '../images/badges/swansea-city.svg';
import tottenham from '../images/badges/tottenham.svg';
import watford from '../images/badges/watford.svg';
import westBromwich from '../images/badges/west-bromwich.svg';
import westHam from '../images/badges/west-ham.svg';

const getBadgeImage = (badge, className) =>
  <img alt="badge" className={className} src={badge} />;

function TeamBadge({ identifier, className }) {
  switch (identifier) {
    case 'zymx5xdh4knl5dwbcfv3kszge9d8brnw':
      return getBadgeImage(arsenal, className);
    case 'vwukoorrrn05evkbgihedi7hfqoi9xrb':
      return getBadgeImage(bournemouth, className);
    case '4cjnmvlocc3lpuvq77mmknpbr6gw6vzg':
      return getBadgeImage(burnley, className);
    case 'blfamr89lxeyywtsraiqzq5p5zuz57i6':
      return getBadgeImage(chelsea, className);
    case 'ethn1l67pxbuumri86iyt3br3aoyvnz9':
      return getBadgeImage(crystalPalace, className);
    case 'ayffheqlvsrgnd5hwji78nmzyndc1ebj':
      return getBadgeImage(everton, className);
    case 'trw9iz9lkvdg0du0wvxssfi7d1h9lvdg':
      return getBadgeImage(hullCity, className);
    case 's43zvsj2nykofbrki5muzrxjbekvw3oq':
      return getBadgeImage(leicesterCity, className);
    case 'akppwaoizlxbsa66oupfkawevutbnjxp':
      return getBadgeImage(liverpool, className);
    case 'xy8xez8msmv4qucyabkhhk4rqbimnprx':
      return getBadgeImage(manCity, className);
    case 'qtjxv9d71ntirsgpjbmeefda4gewdnd9':
      return getBadgeImage(manUnited, className);
    case 'wbnlfprkojj5c2kky1ofbboku8ssr5kn':
      return getBadgeImage(middlesborough, className);
    case 'zygiwlhkuidaovewgbhdk8p0ojhps7m2':
      return getBadgeImage(southampton, className);
    case 'qngf4xllztqc9ufhlodfcyw2foowq37v':
      return getBadgeImage(stokeCity, className);
    case 'l48mbl7oqnb3jkhncgn4whgtc5n9d2ks':
      return getBadgeImage(sunderland, className);
    case 'zhwpc025pq8hxjucxifwkjzgrv42m6zo':
      return getBadgeImage(swanseaCity, className);
    case 'kdrhmjjufk8em0fqjtaltym29v4dwhhb':
      return getBadgeImage(tottenham, className);
    case 'adnmom6x37fhkgdariftnwi3ng7l9y3o':
      return getBadgeImage(watford, className);
    case 'kywzms4a9knaaqq05ifijbywl4s8ay8g':
      return getBadgeImage(westBromwich, className);
    case 'uib3tekuw1rcay846oo1rjqlhaxq877g':
      return getBadgeImage(westHam, className);
    default:
      return getBadgeImage(arsenal, className);
  }
}

TeamBadge.propTypes = {
  identifier: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TeamBadge;
