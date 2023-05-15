import styled, { css } from "styled-components";

export const ContainerStyled = styled.div`
  margin: 0 auto;
  font-family: "Montserrat";
`;
const title = css`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;
const subtitle = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align: center;
`;

// Navbar style
export const Navbar = styled.nav`
  background: #0d263b;
`;
export const NavbarItems = styled.ul`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0 auto;
`;
export const NavbarItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const NavbarLogo = styled.img`
  color: white;
`;
export const NavbarMenu = styled.li`
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-transform: capitalize;
`;
export const NavbarRegistration = styled.a`
  font-size: 18px;
  color: white;
`;

// Search style
const searchStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  padding: 10px 14px;
  border-radius: 7px;
  cursor: pointer;
`;
export const SearchSection = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  margin: 0 auto;
`;
export const SearchItems = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;
export const SearchItem = styled.div`
  ${searchStyle}
  width: 100%;
`;
export const SearchInputIcon = styled.a`
  width: 20px;
  height: 14.59px;
  color: #0061df;
`;
export const SearchInput = styled.input`
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;
export const SearchName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;
export const SearchStatus = styled.div`
  ${searchStyle}
`;
export const SearchPrice = styled.div`
  ${searchStyle}
`;
export const SearchAdvenced = styled.div`
  ${searchStyle}
`;
export const SearchGlobal = styled.div`
  ${searchStyle}
  background:#0061DF;
  i,
  span {
    color: white;
  }
`;

//header style
export const Header = styled.header`
  max-width: 2000px;
  margin: 0 auto;
`;
export const HeaderImage = styled.img`
  position: absolute;
`;
export const HeaderInfos = styled.div`
  position: relative;
  height: 570px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
`;
export const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
`;
export const HeaderSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 12px;
`;
export const HeaderMenuItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 22px;
  margin-top: 18px;
`;
export const HeaderMenuItem = styled.div`
  text-align: center;
  margin-bottom: 24px;
  a {
    color: #ffff;
    opacity: 0.6;
  }
`;
export const HeaderMenuItemInfo = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
export const HeaderSalary = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 34px;
`;
export const HeaderButton = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  border: 1px solid white;
  border-radius: 7px;
  padding: 12px 54px;
`;

// recommended style
export const HouseContainer = styled.div`
  margin-top: 40px;
`;
export const HouseWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const HouseMainTitleWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HouseMainTitle = styled.h1`
  ${title}
`;
export const HouseMainSubtitle = styled.p`
  ${subtitle}
`;
export const House = styled.div`
  max-width: 381px;
  border: 1px solid #e6e9ec;
  border-radius: 7px;
  box-shadow: 0 0 7px #e6e9ec;
`;
export const HouseImage = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
`;
export const HouseInfo = styled.div``;
export const HouseMainImage = styled.img`
  width: 100%;
  height: 100%;
`;
const HouseImageIcons = css`
  position: absolute;
  top: 1rem;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 5px 12px;
  border-radius: 3px;
  text-decoration: none;
  transition: all 0.4s;
`;
export const Featured = styled.a`
  ${HouseImageIcons}
  left: 1rem;
  background: #0061df;
`;
export const ForSale = styled.a`
  ${HouseImageIcons}
  right: 1rem;
  padding: 5px 12px;
  background: #0d263b;
`;
export const ContactImage = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 1.4rem;
  bottom: -1rem;
`;
export const HouseTitle = styled.div`
  margin: 1.2rem;
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d263b;
    margin-bottom: 0;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    margin-top: 0;
  }
`;
export const HouseInfoItems = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const HouseInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 14px;
    font-weight: 400;
    color: #696969;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
`;

export const HouseSalaryInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const HouseSalary = styled.div`
  display: flex;
  flex-direction: column;
  a {
  }
`;
export const BeforSalary = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`;
export const NewSalary = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  text-decoration: none;
  margin-top: 0;
`;
export const HouseLikes = styled.div`
  display: flex;
  gap: 16px;
  a {
    font-size: 12px;
    padding: 10px;
    border-radius: 50px;
    color: #696969;
  }
  a:hover {
    background: #f6f8f9;
  }
`;

// About style
export const AboutBg = styled.div`
  background: #f5f7fc;
  padding: 30px 10px;
  margin-top: 60px;
`;
export const About = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`;
export const AboutTitle = styled.div`
  ${title}
`;
export const AboutSubtitle = styled.div`
  ${subtitle}
`;
export const AboutItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  gap: 50px;
`;
export const AboutItem = styled.div`
  text-align: center;
  i {
    color: #0061df;
    font-size: 48px;
  }
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #0d263b;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #696969;
  }
`;
// Category style
export const Category = styled.div`
  margin: 60px auto;
`;
export const CategoryTitle = styled.div`
  ${title}
  margin-bottom: 12px;
`;
export const CategorySubtitle = styled.div`
  ${subtitle}
  margin-bottom: 24px;
`;
export const CategoryItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const CategoryItem = styled.div`
  position: relative;
  a {
    position: absolute;
    left: 6rem;
    top: 8rem;
    font-size: 84px;
    color: white;
  }
`;
export const CategoryImage = styled.img`
  opacity: 0.4;
  cursor: pointer;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
`;
