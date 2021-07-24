import React from 'react';

import * as S from './Header.style';

import Logo from '../../assets/Logo.png';

const Header = ({ links }) => (
  <S.NavigationWraper>
    <S.NavigationBlock>
      <S.Logo src={Logo} alt="Bitenu medus logo" />
      <S.LinksBlock>
        {links &&
          links.map((link) => (
            <S.StyledLink key={link.url} to={link.url}>
              {link.title}
            </S.StyledLink>
          ))}
      </S.LinksBlock>
      <S.Button
        onClick={() => {
          localStorage.removeItem('user');
          window.location.replace('http://localhost:3000/login');
        }}
      >
        Logout
      </S.Button>
    </S.NavigationBlock>
  </S.NavigationWraper>
);

export default Header;