import React from "react";
import {
  ContainerStyled,
  Navbar,
  NavbarItem,
  NavbarLogo,
  NavbarMenu,
  NavbarRegistration,
  NavbarItems,
  SearchSection,
  SearchItems,
  SearchItem,
  SearchInputIcon,
  SearchInput,
  SearchStatus,
  SearchPrice,
  SearchAdvenced,
  SearchGlobal,
  SearchName,
  Header,
  HeaderImage,
  HeaderInfos,
  HeaderTitle,
  HeaderSubtitle,
  HeaderMenuItems,
  HeaderMenuItem,
  HeaderMenuItemInfo,
  HeaderSalary,
  HeaderButton,
  HouseWrapper,
  HouseMainTitleWrapper,
  HouseMainTitle,
  HouseMainSubtitle,
  House,
  HouseImage,
  HouseInfo,
  HouseMainImage,
  Featured,
  ForSale,
  ContactImage,
  HouseTitle,
  HouseInfoItems,
  HouseInfoItem,
  HouseSalaryInfo,
  HouseSalary,
  BeforSalary,
  NewSalary,
  HouseLikes,
  HouseContainer,
  AboutBg,
  About,
  AboutTitle,
  AboutSubtitle,
  AboutItems,
  AboutItem,
  Category,
  CategoryTitle,
  CategorySubtitle,
  CategoryItems,
  CategoryItem,
  CategoryImage,
  PopularHome,
  PopularImage,
  PopularTitle,
  PopularButton,
  PopularHomeInfo,
  TestimonialsBg,
  Testimonials,
  TestimonialsTitle,
  TestimonialsSubtitle,
  TestimonialsItems,
  TestimonialsItem,
  TestimonialsItemText,
  TestimonialsItemContact,
  TestimonialsItemContactImage,
  TestimonialsItemContactTitel,
  TestimonialsItemContactSubtitle,
  FooterBg,
  Footer,
  FooterItems,
  FooterContactItem,
  FooterItem,
  FooterItemTitle,
  FooterItemSubtitle,
  FooterContactItemTitle,
  FooterContactItemSubtitle,
  FooterContactItemSotiol,
} from "./styledCss";

class Styled extends React.Component {
  state = {};
  render() {
    return (
      <ContainerStyled>
        {/*  */}
        <Navbar>
          <NavbarItems>
            <NavbarItem>
              <NavbarLogo src="./image/logo.png" />
            </NavbarItem>
            <NavbarItem>
              <NavbarMenu>home</NavbarMenu>
              <NavbarMenu>properties</NavbarMenu>
              <NavbarMenu>contacts</NavbarMenu>
            </NavbarItem>
            <NavbarItem>
              <NavbarRegistration>
                <i className="fa-regular fa-user"></i>
              </NavbarRegistration>
            </NavbarItem>
          </NavbarItems>
        </Navbar>
        {/*  */}
        <SearchSection>
          <SearchItems>
            <SearchItem>
              <SearchInputIcon>
                <i className="fa-solid fa-house"></i>
              </SearchInputIcon>
              <SearchInput placeholder="Enter an address, neighborhood, city, or ZIP code" />
            </SearchItem>
          </SearchItems>
          <SearchItems>
            <SearchStatus>
              <SearchInputIcon>
                <i className="fa-solid fa-key"></i>
              </SearchInputIcon>
              <SearchName>Status</SearchName>
            </SearchStatus>
            <SearchPrice>
              <SearchInputIcon>
                <i className="fa-solid fa-tag"></i>
              </SearchInputIcon>
              <SearchName>Price</SearchName>
            </SearchPrice>
            <SearchAdvenced>
              <SearchInputIcon>
                <i className="fa-solid fa-sliders"></i>
              </SearchInputIcon>
              <SearchName>Advenced</SearchName>
            </SearchAdvenced>
            <SearchGlobal>
              <SearchInputIcon>
                <i className="fa-solid fa-magnifying-glass"></i>
              </SearchInputIcon>
              <SearchName>Search</SearchName>
            </SearchGlobal>
          </SearchItems>
        </SearchSection>
        {/*  */}
        <Header>
          <HeaderImage src="./image/main-image.svg" alt="House" />
          <HeaderInfos>
            <HeaderTitle>Skyper Pool Partment</HeaderTitle>
            <HeaderSubtitle>
              112 Glenwood Ave Hyde Park, Boston, MA
            </HeaderSubtitle>
            <HeaderMenuItems>
              <HeaderMenuItem>
                <a href="h">
                  <i className="fa-solid fa-bed"></i>
                </a>
                <HeaderMenuItemInfo>4 beds</HeaderMenuItemInfo>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <a href="h">
                  <i className="fa-solid fa-bath"></i>
                </a>
                <HeaderMenuItemInfo>5 bath</HeaderMenuItemInfo>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <a href="h">
                  <i className="fa-solid fa-warehouse"></i>
                </a>
                <HeaderMenuItemInfo>1 garage</HeaderMenuItemInfo>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <a href="h">
                  <i className="fa-solid fa-thermometer"></i>
                </a>
                <HeaderMenuItemInfo>1200 Sq Ft</HeaderMenuItemInfo>
              </HeaderMenuItem>
            </HeaderMenuItems>
            <HeaderSalary>$5,250/mo</HeaderSalary>
            <HeaderButton>Read more</HeaderButton>
          </HeaderInfos>
        </Header>
        {/*  */}
        <HouseContainer>
          <HouseMainTitleWrapper>
            <HouseMainTitle>Recommended</HouseMainTitle>
            <HouseMainSubtitle>
              Nulla quis curabitur velit volutpat auctor bibendum consectetur
              sit.
            </HouseMainSubtitle>
          </HouseMainTitleWrapper>
          <HouseWrapper>
            <House>
              <HouseImage>
                <HouseMainImage src="./image/house.png" alt="houseImage" />
                <Featured href="h">featured</Featured>
                <ForSale href="h">for sale</ForSale>
                <ContactImage
                  src={"./image/contact-image1.png"}
                  alt="contactImage"
                />
              </HouseImage>
              <HouseInfo>
                <HouseTitle>
                  <h3>New Apartment Nice Wiew</h3>
                  <p>Quincy St, Brooklyn, NY, USA</p>
                </HouseTitle>
                <HouseInfoItems>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bed"></i>
                    </a>
                    <span>bed</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bath"></i>
                    </a>
                    <span>bath</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-warehouse"></i>
                    </a>
                    <span>garage</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-ruler"></i>
                    </a>
                    <span>sq</span>
                  </HouseInfoItem>
                </HouseInfoItems>
                <hr />
                <HouseSalaryInfo>
                  <HouseSalary>
                    <BeforSalary href="h">beforSalary</BeforSalary>
                    <NewSalary href="h" type={"new"}>
                      newSalary
                    </NewSalary>
                  </HouseSalary>
                  <HouseLikes>
                    <a href="h">
                      <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </a>
                    <a href="h">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </HouseLikes>
                </HouseSalaryInfo>
              </HouseInfo>
            </House>
            <House>
              <HouseImage>
                <HouseMainImage src="./image/house.png" alt="houseImage" />
                <Featured href="h">featured</Featured>
                <ForSale href="h">for sale</ForSale>
                <ContactImage
                  src={"./image/contact-image1.png"}
                  alt="contactImage"
                />
              </HouseImage>
              <HouseInfo>
                <HouseTitle>
                  <h3>New Apartment Nice Wiew</h3>
                  <p>Quincy St, Brooklyn, NY, USA</p>
                </HouseTitle>
                <HouseInfoItems>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bed"></i>
                    </a>
                    <span>bed</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bath"></i>
                    </a>
                    <span>bath</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-warehouse"></i>
                    </a>
                    <span>garage</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-ruler"></i>
                    </a>
                    <span>sq</span>
                  </HouseInfoItem>
                </HouseInfoItems>
                <hr />
                <HouseSalaryInfo>
                  <HouseSalary>
                    <BeforSalary href="h">beforSalary</BeforSalary>
                    <NewSalary href="h" type={"new"}>
                      newSalary
                    </NewSalary>
                  </HouseSalary>
                  <HouseLikes>
                    <a href="h">
                      <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </a>
                    <a href="h">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </HouseLikes>
                </HouseSalaryInfo>
              </HouseInfo>
            </House>
            <House>
              <HouseImage>
                <HouseMainImage src="./image/house.png" alt="houseImage" />
                <Featured href="h">featured</Featured>
                <ForSale href="h">for sale</ForSale>
                <ContactImage
                  src={"./image/contact-image1.png"}
                  alt="contactImage"
                />
              </HouseImage>
              <HouseInfo>
                <HouseTitle>
                  <h3>New Apartment Nice Wiew</h3>
                  <p>Quincy St, Brooklyn, NY, USA</p>
                </HouseTitle>
                <HouseInfoItems>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bed"></i>
                    </a>
                    <span>bed</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bath"></i>
                    </a>
                    <span>bath</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-warehouse"></i>
                    </a>
                    <span>garage</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-ruler"></i>
                    </a>
                    <span>sq</span>
                  </HouseInfoItem>
                </HouseInfoItems>
                <hr />
                <HouseSalaryInfo>
                  <HouseSalary>
                    <BeforSalary href="h">beforSalary</BeforSalary>
                    <NewSalary href="h" type={"new"}>
                      newSalary
                    </NewSalary>
                  </HouseSalary>
                  <HouseLikes>
                    <a href="h">
                      <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </a>
                    <a href="h">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </HouseLikes>
                </HouseSalaryInfo>
              </HouseInfo>
            </House>
          </HouseWrapper>
        </HouseContainer>
        {/*  */}
        <AboutBg>
          <About>
            <AboutTitle>Why Choose Us?</AboutTitle>
            <AboutSubtitle>
              Nulla quis curabitur velit volutpat auctor bibendum consectetur
              sit.
            </AboutSubtitle>
            <AboutItems>
              <AboutItem>
                <a href="h">
                  <i className="fa-regular fa-comment-dots"></i>
                </a>
                <h4>Trusted By Thousands</h4>
                <p>
                  With over 1 million+ homes for sale available on the website,
                  Trulia can match you with a house you will want to call home.
                </p>
              </AboutItem>
              <AboutItem>
                <a href="h">
                  <i className="fa-solid fa-house"></i>
                </a>
                <h4>Trusted By Thousands</h4>
                <p>
                  With over 1 million+ homes for sale available on the website,
                  Trulia can match you with a house you will want to call home.
                </p>
              </AboutItem>
              <AboutItem>
                <a href="h">
                  <i className="fa-solid fa-mobile-retro"></i>
                </a>
                <h4>Trusted By Thousands</h4>
                <p>
                  With over 1 million+ homes for sale available on the website,
                  Trulia can match you with a house you will want to call home.
                </p>
              </AboutItem>
              <AboutItem>
                <a href="h">
                  <i className="fa-solid fa-globe"></i>
                </a>
                <h4>Trusted By Thousands</h4>
                <p>
                  With over 1 million+ homes for sale available on the website,
                  Trulia can match you with a house you will want to call home.
                </p>
              </AboutItem>
            </AboutItems>
          </About>
        </AboutBg>
        {/*  */}
        <Category>
          <CategoryTitle>Category</CategoryTitle>
          <CategorySubtitle>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </CategorySubtitle>
          <CategoryItems>
            <CategoryItem>
              <CategoryImage src="./image/category-house.svg" />
              <a href="h">
                <i className="fa-regular fa-building"></i>
              </a>
            </CategoryItem>
            <CategoryItem>
              <CategoryImage src="./image/category-house.svg" />
              <a href="h">
                <i className="fa-regular fa-building"></i>
              </a>
            </CategoryItem>
            <CategoryItem>
              <CategoryImage src="./image/category-house.svg" />
              <a href="h">
                <i className="fa-regular fa-building"></i>
              </a>
            </CategoryItem>
            <CategoryItem>
              <CategoryImage src="./image/category-house.svg" />
              <a href="h">
                <i className="fa-regular fa-building"></i>
              </a>
            </CategoryItem>
          </CategoryItems>
        </Category>
        {/*  */}
        <PopularHome>
          <PopularImage src="./image/home-popular.png" />
          <PopularHomeInfo>
            <PopularTitle>
              Vermont Farmhouse With Antique Jail Is the Week's Most Popular
              Home
            </PopularTitle>
            <PopularButton>Read more</PopularButton>
          </PopularHomeInfo>
        </PopularHome>
        {/*  */}
        <HouseContainer>
          <HouseMainTitleWrapper>
            <HouseMainTitle>Recent Properties for Rent</HouseMainTitle>
            <HouseMainSubtitle>
              Nulla quis curabitur velit volutpat auctor bibendum consectetur
              sit.
            </HouseMainSubtitle>
          </HouseMainTitleWrapper>
          <HouseWrapper>
            <House>
              <HouseImage>
                <HouseMainImage src="./image/house.png" alt="houseImage" />
                <Featured href="h">featured</Featured>
                <ForSale href="h">for sale</ForSale>
                <ContactImage
                  src={"./image/contact-image1.png"}
                  alt="contactImage"
                />
              </HouseImage>
              <HouseInfo>
                <HouseTitle>
                  <h3>New Apartment Nice Wiew</h3>
                  <p>Quincy St, Brooklyn, NY, USA</p>
                </HouseTitle>
                <HouseInfoItems>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bed"></i>
                    </a>
                    <span>bed</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bath"></i>
                    </a>
                    <span>bath</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-warehouse"></i>
                    </a>
                    <span>garage</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-ruler"></i>
                    </a>
                    <span>sq</span>
                  </HouseInfoItem>
                </HouseInfoItems>
                <hr />
                <HouseSalaryInfo>
                  <HouseSalary>
                    <BeforSalary href="h">beforSalary</BeforSalary>
                    <NewSalary href="h" type={"new"}>
                      newSalary
                    </NewSalary>
                  </HouseSalary>
                  <HouseLikes>
                    <a href="h">
                      <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </a>
                    <a href="h">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </HouseLikes>
                </HouseSalaryInfo>
              </HouseInfo>
            </House>
            <House>
              <HouseImage>
                <HouseMainImage src="./image/house.png" alt="houseImage" />
                <Featured href="h">featured</Featured>
                <ForSale href="h">for sale</ForSale>
                <ContactImage
                  src={"./image/contact-image1.png"}
                  alt="contactImage"
                />
              </HouseImage>
              <HouseInfo>
                <HouseTitle>
                  <h3>New Apartment Nice Wiew</h3>
                  <p>Quincy St, Brooklyn, NY, USA</p>
                </HouseTitle>
                <HouseInfoItems>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bed"></i>
                    </a>
                    <span>bed</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bath"></i>
                    </a>
                    <span>bath</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-warehouse"></i>
                    </a>
                    <span>garage</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-ruler"></i>
                    </a>
                    <span>sq</span>
                  </HouseInfoItem>
                </HouseInfoItems>
                <hr />
                <HouseSalaryInfo>
                  <HouseSalary>
                    <BeforSalary href="h">beforSalary</BeforSalary>
                    <NewSalary href="h" type={"new"}>
                      newSalary
                    </NewSalary>
                  </HouseSalary>
                  <HouseLikes>
                    <a href="h">
                      <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </a>
                    <a href="h">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </HouseLikes>
                </HouseSalaryInfo>
              </HouseInfo>
            </House>
            <House>
              <HouseImage>
                <HouseMainImage src="./image/house.png" alt="houseImage" />
                <Featured href="h">featured</Featured>
                <ForSale href="h">for sale</ForSale>
                <ContactImage
                  src={"./image/contact-image1.png"}
                  alt="contactImage"
                />
              </HouseImage>
              <HouseInfo>
                <HouseTitle>
                  <h3>New Apartment Nice Wiew</h3>
                  <p>Quincy St, Brooklyn, NY, USA</p>
                </HouseTitle>
                <HouseInfoItems>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bed"></i>
                    </a>
                    <span>bed</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-bath"></i>
                    </a>
                    <span>bath</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-warehouse"></i>
                    </a>
                    <span>garage</span>
                  </HouseInfoItem>
                  <HouseInfoItem>
                    <a href="h">
                      <i className="fa-solid fa-ruler"></i>
                    </a>
                    <span>sq</span>
                  </HouseInfoItem>
                </HouseInfoItems>
                <hr />
                <HouseSalaryInfo>
                  <HouseSalary>
                    <BeforSalary href="h">beforSalary</BeforSalary>
                    <NewSalary href="h" type={"new"}>
                      newSalary
                    </NewSalary>
                  </HouseSalary>
                  <HouseLikes>
                    <a href="h">
                      <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </a>
                    <a href="h">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </HouseLikes>
                </HouseSalaryInfo>
              </HouseInfo>
            </House>
          </HouseWrapper>
        </HouseContainer>
        {/*  */}
        <TestimonialsBg>
          <Testimonials>
            <TestimonialsTitle>Testimonials</TestimonialsTitle>
            <TestimonialsSubtitle>
              Nulla quis curabitur velit volutpat auctor bibendum consectetur
              sit.
            </TestimonialsSubtitle>
            <TestimonialsItems>
              <TestimonialsItem>
                <TestimonialsItemText>
                  “ I believe in lifelong learning and Skola is a great place to
                  learn from experts. I've learned a lot and recommend it to all
                  my friends “
                  <TestimonialsItemContact>
                    <TestimonialsItemContactImage
                      src="../image/contact-image1.png"
                      alt="contact-image"
                    />
                    <TestimonialsItemContactTitel>
                      Marvin McKinney
                    </TestimonialsItemContactTitel>
                    <TestimonialsItemContactSubtitle>
                      Designer
                    </TestimonialsItemContactSubtitle>
                  </TestimonialsItemContact>
                </TestimonialsItemText>
              </TestimonialsItem>
              <TestimonialsItem>
                <TestimonialsItemText>
                  “ I believe in lifelong learning and Skola is a great place to
                  learn from experts. I've learned a lot and recommend it to all
                  my friends “
                  <TestimonialsItemContact>
                    <TestimonialsItemContactImage
                      src="../image/contact-image1.png"
                      alt="contact-image"
                    />
                    <TestimonialsItemContactTitel>
                      Marvin McKinney
                    </TestimonialsItemContactTitel>
                    <TestimonialsItemContactSubtitle>
                      Designer
                    </TestimonialsItemContactSubtitle>
                  </TestimonialsItemContact>
                </TestimonialsItemText>
              </TestimonialsItem>
              <TestimonialsItem>
                <TestimonialsItemText>
                  “ I believe in lifelong learning and Skola is a great place to
                  learn from experts. I've learned a lot and recommend it to all
                  my friends “
                  <TestimonialsItemContact>
                    <TestimonialsItemContactImage
                      src="../image/contact-image1.png"
                      alt="contact-image"
                    />
                    <TestimonialsItemContactTitel>
                      Marvin McKinney
                    </TestimonialsItemContactTitel>
                    <TestimonialsItemContactSubtitle>
                      Designer
                    </TestimonialsItemContactSubtitle>
                  </TestimonialsItemContact>
                </TestimonialsItemText>
              </TestimonialsItem>
            </TestimonialsItems>
          </Testimonials>
        </TestimonialsBg>
        {/*  */}
        <FooterBg>
          <Footer>
            <FooterItems>
              <FooterContactItem>
                <FooterContactItemTitle>Contact Us</FooterContactItemTitle>
                <FooterContactItemSubtitle>
                  <a href="h">
                    <i class="fa-solid fa-location-dot"></i>
                  </a>
                  <span>
                    329 Queensberry Street, North Melbourne VIC 3051, Australia.
                  </span>
                </FooterContactItemSubtitle>
                <FooterContactItemSubtitle>
                  <a href="h">
                    <i class="fa-solid fa-phone"></i>
                  </a>
                  <span>123 456 7890</span>
                </FooterContactItemSubtitle>
                <FooterContactItemSubtitle>
                  <a href="h">
                    <i class="fa-regular fa-envelope"></i>
                  </a>
                  <span>support@houzing.com</span>
                </FooterContactItemSubtitle>
                <FooterContactItemSotiol>
                  <div>
                    <a href="h">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                  <div>
                    <a href="h">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                  <div>
                    <a href="h">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a href="h">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </FooterContactItemSotiol>
              </FooterContactItem>
              <FooterItem>
                <FooterItemTitle>Discover</FooterItemTitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
              </FooterItem>
              <FooterItem>
                <FooterItemTitle>Discover</FooterItemTitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
              </FooterItem>
              <FooterItem>
                <FooterItemTitle>Discover</FooterItemTitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
                <FooterItemSubtitle>Chicago</FooterItemSubtitle>
              </FooterItem>
            </FooterItems>
          </Footer>
        </FooterBg>
      </ContainerStyled>
    );
  }
}
export default Styled;
