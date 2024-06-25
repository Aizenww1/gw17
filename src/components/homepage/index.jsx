import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import'./index.scss'
export default function Nav(){
    const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 0.5C4.73478 0.5 4.48043 0.605357 4.29289 0.792893C4.10536 0.98043 4 1.23478 4 1.5C4 1.76522 4.10536 2.01957 4.29289 2.20711C4.48043 2.39464 4.73478 2.5 5 2.5H11C11.2652 2.5 11.5196 2.39464 11.7071 2.20711C11.8946 2.01957 12 1.76522 12 1.5C12 1.23478 11.8946 0.98043 11.7071 0.792893C11.5196 0.605357 11.2652 0.5 11 0.5H5ZM2 4.5C2 4.23478 2.10536 3.98043 2.29289 3.79289C2.48043 3.60536 2.73478 3.5 3 3.5H13C13.2652 3.5 13.5196 3.60536 13.7071 3.79289C13.8946 3.98043 14 4.23478 14 4.5C14 4.76522 13.8946 5.01957 13.7071 5.20711C13.5196 5.39464 13.2652 5.5 13 5.5H3C2.73478 5.5 2.48043 5.39464 2.29289 5.20711C2.10536 5.01957 2 4.76522 2 4.5ZM0 8.5C0 7.96957 0.210714 7.46086 0.585786 7.08579C0.960859 6.71071 1.46957 6.5 2 6.5H14C14.5304 6.5 15.0391 6.71071 15.4142 7.08579C15.7893 7.46086 16 7.96957 16 8.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2C1.46957 14.5 0.960859 14.2893 0.585786 13.9142C0.210714 13.5391 0 13.0304 0 12.5V8.5Z"
          
          />
        </svg>
 
        <a href="#" className="flex items-center">
        all products
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5ZM10 5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5C7.46957 7.5 6.96086 7.28929 6.58579 6.91421C6.21071 6.53914 6 6.03043 6 5.5C6 4.96957 6.21071 4.46086 6.58579 4.08579C6.96086 3.71071 7.46957 3.5 8 3.5C8.53043 3.5 9.03914 3.71071 9.41421 4.08579C9.78929 4.46086 10 4.96957 10 5.5ZM8 9.5C7.0426 9.49981 6.10528 9.77449 5.29942 10.2914C4.49356 10.8083 3.85304 11.5457 3.454 12.416C4.01668 13.0706 4.71427 13.5958 5.49894 13.9555C6.28362 14.3152 7.13681 14.5009 8 14.5C8.86319 14.5009 9.71638 14.3152 10.5011 13.9555C11.2857 13.5958 11.9833 13.0706 12.546 12.416C12.147 11.5457 11.5064 10.8083 10.7006 10.2914C9.89472 9.77449 8.9574 9.49981 8 9.5Z"
            
          />
        </svg>
        <a href="#" className="flex items-center">
        Solutions
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V4.5C0 5.03043 0.210714 5.53914 0.585786 5.91421C0.960859 6.28929 1.46957 6.5 2 6.5H4C4.53043 6.5 5.03914 6.28929 5.41421 5.91421C5.78929 5.53914 6 5.03043 6 4.5V2.5C6 1.96957 5.78929 1.46086 5.41421 1.08579C5.03914 0.710714 4.53043 0.5 4 0.5H2ZM2 8.5C1.46957 8.5 0.960859 8.71071 0.585786 9.08579C0.210714 9.46086 0 9.96957 0 10.5V12.5C0 13.0304 0.210714 13.5391 0.585786 13.9142C0.960859 14.2893 1.46957 14.5 2 14.5H4C4.53043 14.5 5.03914 14.2893 5.41421 13.9142C5.78929 13.5391 6 13.0304 6 12.5V10.5C6 9.96957 5.78929 9.46086 5.41421 9.08579C5.03914 8.71071 4.53043 8.5 4 8.5H2ZM8 2.5C8 1.96957 8.21071 1.46086 8.58579 1.08579C8.96086 0.710714 9.46957 0.5 10 0.5H12C12.5304 0.5 13.0391 0.710714 13.4142 1.08579C13.7893 1.46086 14 1.96957 14 2.5V4.5C14 5.03043 13.7893 5.53914 13.4142 5.91421C13.0391 6.28929 12.5304 6.5 12 6.5H10C9.46957 6.5 8.96086 6.28929 8.58579 5.91421C8.21071 5.53914 8 5.03043 8 4.5V2.5ZM8 10.5C8 9.96957 8.21071 9.46086 8.58579 9.08579C8.96086 8.71071 9.46957 8.5 10 8.5H12C12.5304 8.5 13.0391 8.71071 13.4142 9.08579C13.7893 9.46086 14 9.96957 14 10.5V12.5C14 13.0304 13.7893 13.5391 13.4142 13.9142C13.0391 14.2893 12.5304 14.5 12 14.5H10C9.46957 14.5 8.96086 14.2893 8.58579 13.9142C8.21071 13.5391 8 13.0304 8 12.5V10.5Z"
           
          />
        </svg>
        <a href="#" className="flex items-center">
        ABOUT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 2.5C0 1.96957 0.210714 1.46086 0.585786 1.08579C0.960859 0.710714 1.46957 0.5 2 0.5H14C14.5304 0.5 15.0391 0.710714 15.4142 1.08579C15.7893 1.46086 16 1.96957 16 2.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2C1.46957 14.5 0.960859 14.2893 0.585786 13.9142C0.210714 13.5391 0 13.0304 0 12.5V2.5ZM3.293 3.793C3.48053 3.60553 3.73484 3.50021 4 3.50021C4.26516 3.50021 4.51947 3.60553 4.707 3.793L7.707 6.793C7.89447 6.98053 7.99979 7.23484 7.99979 7.5C7.99979 7.76516 7.89447 8.01947 7.707 8.207L4.707 11.207C4.5184 11.3892 4.2658 11.49 4.0036 11.4877C3.7414 11.4854 3.49059 11.3802 3.30518 11.1948C3.11977 11.0094 3.0146 10.7586 3.01233 10.4964C3.01005 10.2342 3.11084 9.9816 3.293 9.793L5.586 7.5L3.293 5.207C3.10553 5.01947 3.00021 4.76516 3.00021 4.5C3.00021 4.23484 3.10553 3.98053 3.293 3.793ZM9 9.5C8.73478 9.5 8.48043 9.60536 8.29289 9.79289C8.10536 9.98043 8 10.2348 8 10.5C8 10.7652 8.10536 11.0196 8.29289 11.2071C8.48043 11.3946 8.73478 11.5 9 11.5H12C12.2652 11.5 12.5196 11.3946 12.7071 11.2071C12.8946 11.0196 13 10.7652 13 10.5C13 10.2348 12.8946 9.98043 12.7071 9.79289C12.5196 9.60536 12.2652 9.5 12 9.5H9Z"
           
          />
        </svg>
        <a href="#" className="flex items-center">
        Support
        </a>
      </Typography>
    </ul>
    );
    return(
        <>
       <div className="BOX">
       <div className="nav">
        <Navbar fullWidth className="  px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src="/IMAGE (4).png" alt="" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
        </div>
        <div className="new">
            <div className="text">
                <h1>The new phones are here take a look.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
                <Button variant="outlined">outlined</Button>

            </div>
            <div className="img">
                <img src="https://s3-alpha-sig.figma.com/img/3c1e/4caa/09390e4696bd452c8420dbe4a7164d7b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQoTi-nuGh3~rztO6kYe9EoAX5Ix3GYVCuKCTuevSGqS8nFiCdIzhzA0ofZeXKewJbCa~3ljrx2n5ufvMhPUH8Czxyss19VFnZo72Qy2w8048HQZLz5~ef0vCdMspzty06Rb3KYXnVXNpuvmIhP7hbfiQHgZ3mSHu7XTm-P0BuOJkN~zceUoiYCvfceIQ-kWbSK0qQGfwNjAWE8S24N4nMkiJ0I-3MC2ErJJUZM7njVOiUDfQc0oZfU5YCTp651HJUZH7K7uCXhEJOQaYRBuPgeripDhnxbHy88sRILddgHhiBEMNiNyUuX-IVcyA74HnmUFhgSCwhdX3kIRRrXRWg__" alt="" />
            </div>
        </div>
        <div className="out">
            <h1>Shop our latest offers and categories</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="all">
            <div className="tab w-[100%] h-[80%] gap-5 flex flex-col items-start">
                <div className="lab p-[10px] flex flex-col g-[5px] ">
                    <img className="w-[50%]" src="https://s3-alpha-sig.figma.com/img/609c/d336/10f5bce3a3242d7165d4c622572a7f34?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=brP4TEdRkmoI0u1IBGxkvvrhXhlr0C-VZ7gnDraxYZhWpK1uNWxStq1lBHkrUtIyDEd4a2XPlhlXuq~k867KEpYcDQ9iz2mQPveeGx3kdrBAa9zDkehMq56hd626pLAJFVvgI31xdE4lSN0bGxbl8NyRTnxYFab-saRdduqsUFzDugjzxlW39o9FDypfADC~oON9Fjvv93kka3DqNYpBcxYHSj9JwM9GXLjVQt~JrJVGDBbp08l6FWI65X4cx8P3dtKVgyfbvaWkPZs133tE~PFaJV1W-LB~BS2FqTNrNcAfqdCbC4OWi36CNCk2LZPrPhEH9RU0OJdDmiMjlbG9Xg__" alt="" />
                    <h1>True Laptop Solution</h1>
                </div>
                <div className="wach h-[51%] w-[100%]  p-[10px] flex g-[5px] items-center">
                    <img className="w-[50%] h-[50%] object-cover" src="https://s3-alpha-sig.figma.com/img/382a/966d/9393f6cbe099e93a46809a2330d2eebf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MxIxUQXACp4hGwxaKBPByG4EPHy8thz23BejrpJnMMR~2tvScPskp99dNgV6u7tT6S59cgMNl5Oe7j~gJTASvt2wq4Vlbl8LsKyub1sUKP1BrX5vICyAsnTXOOLJ-bQTxGK8seCxxGnE8HnorxzLXEsaIX3FWzPLSQwipWg97qZbinZTiRChN8rwieYVEank1g9gTjdIYpd6~qCDaoPLVCwBCtnFTg6SpK15u0uFLF~2CBjHEevFi23BI1c0rjhqMmK1U~DackfMoMux8Owg7yjnWgEWvEFqZkwnuttUwq7a6U9AA2EunIRw6-qNp0612Nah9D8oq7KWKxSwGlXHMA__" alt="" />
                    <h1>Not just stylisht</h1>
                </div>
            </div>
            <div className="pone w-[100%] h-[80%]">
                <div className="day flex flex-col gap-5 p-[10px]">
                    <img className="w-[80%] h-[80%] object-cover" src="https://s3-alpha-sig.figma.com/img/40fa/449b/d25d54bfdac12913f24fb4638ff57107?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IrnH0scT1XPLAltVNj7yuBQ03mu~YGPhQwEMFiiNC8XvmBDKcbNVPp85kz8wGfzbYqOW~YYHxWrjd3nn5WH2bWxZPyPNmhlouCp8Jjz-c-KtTVuWLr4OVMSr4Wt1txigOSUrkXAWAC5nuTuzAZ2e7RXXEzE~OJU5B-evskG49TjGjQO3Z4iPKbmiWV0KUCjxAGIgtgtHLx3ETzw4xE8Etiv67BqNyzrPsiqIihkccFKcUffbbTwpBxUEVuttQb5wtxHUst-osrRy6woTbPbsjnl346uchwvaxgkvexqfyS1NMeV9dlN3eotpBZZtmkjr7TJxRFz7ngXqgcllSmtHRw__" alt="" />
                    <h1>Your day to day life</h1>
                </div>
                <div className="day flex flex-col gap-5 p-[10px]">
                    <img className="w-[80%] h-[80%] object-cover" src="https://s3-alpha-sig.figma.com/img/40fa/449b/d25d54bfdac12913f24fb4638ff57107?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IrnH0scT1XPLAltVNj7yuBQ03mu~YGPhQwEMFiiNC8XvmBDKcbNVPp85kz8wGfzbYqOW~YYHxWrjd3nn5WH2bWxZPyPNmhlouCp8Jjz-c-KtTVuWLr4OVMSr4Wt1txigOSUrkXAWAC5nuTuzAZ2e7RXXEzE~OJU5B-evskG49TjGjQO3Z4iPKbmiWV0KUCjxAGIgtgtHLx3ETzw4xE8Etiv67BqNyzrPsiqIihkccFKcUffbbTwpBxUEVuttQb5wtxHUst-osrRy6woTbPbsjnl346uchwvaxgkvexqfyS1NMeV9dlN3eotpBZZtmkjr7TJxRFz7ngXqgcllSmtHRw__" alt="" />
                    <h1>Your day to day life</h1>
                </div>
            </div>
        </div>
        <div className="save">
            <h1 className="h1">Save on our most selled items.</h1>
            <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            <div className="cards">
                <div className="card flex flex-col items-start gap-5">
                    <img src="https://s3-alpha-sig.figma.com/img/84b3/b83a/e77b25bbc02aba9af3cbc4ead872c81a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gdWoBs-rbTFsylmlBTMNcmxPulwmCW-t5yQ6nVUInR~BzdV~OQfGr2H3pqmKbsk4le7-nKEb9ZqHEuubSaoMo55ghb-VKfOawFRBYF9OUatI5RekQqtKB3hnECo2HG5k51-Qt9XPJyrx7YOlsvTIB4xVQ4Sd1LDeQIXL8Gj-Vt8VAliddjtwC~CHZG~X-utx4rG5A6QLRZEbMT20nJaMbgdsfUwhU4YCexh9gs-z-u3PkF27EmPEu4bXjFQPQuKgKGvWsVz9ndKMF1zDaiHXIOQu7LFtinclqYB2dlpofWW88arpMAbtYGg-lI-oOJuGkFDVoV4I8esbY1kuCXxbJA__" alt="" />
                    <h2>MacBook Pro 13</h2>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                    <h1>$ 1,200.00 USD</h1>
                </div>
                <div className="card flex flex-col items-start gap-5">
                    <img className="w-[150px]" src="https://s3-alpha-sig.figma.com/img/dd8f/8e97/406273ec534c8957fb6a49849495e0f2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=apyzBqZZEd5ccTfRrmwSGdj-nSJwXVKbNwMJJh9Gu03AjV72vqgOOjbyR20XfXH5GlNRcwZ~BFQsaDkfEyeGaGc9U2bRd2BKp~NjHcxPFWOZeupyQQ7sIAi4jX02YSdbRKwn4W-rEJgB50OgIPTKaxhtCoFlIOoItwYDaSoj9lrEEtpSZmt0LBnYeb1WWYFnFIjWL9punEYBa4mc3wv-pEzN75b9IRkPgzbbst5s69zF9DjCWlDF3Q~AbJpr0RLSAa0wsZ3-f4qupGqUGEUIwILqyV0ZxPYLkVRyzwzk4Flj9Pj6FOLmweemkZwkCmB9U~kblQxZIvFsaI44QzGY0g__" alt="" />
                    <h2>MacBook Pro 13</h2>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                    <h1>$ 1,200.00 USD</h1>
                </div>
                <div className="card flex flex-col items-start gap-5">
                    <img className="h-[200px]" src="https://s3-alpha-sig.figma.com/img/e7ec/6d25/9e9532a0e69240f28a4a98d2a32c3b5d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fUSizavufujB4zktH3TnYpJQBhCUDkdVRNydvz3OHfrLh15Ndagj~ssF95qKq8PtcHmZXWlyBOJeXugVgwk4lNiJYZd5RHTwSrY96HxrggbivLTIg6ZaaYAf7ktiaK3KaXpa5VOXGiIOf1bkx3yZf-VlaWoXLNknpwQ-Elxp-UJVZEc8hdwDX4dMqwr7fwjRs9pxhZ~5tQgJsLU8VukUZFIJBBVRLh3bTcfKNiN7sCa5iBmNb4Gfy7PWiUROxca2bxJjEOr3zW0uB~JL8Mqn8MYQTXP6Cr61Izu5gjgX4gm7x-K5NRsfOADQVoOsXF6MwW4u0cszqJL-GVrzMYqprA__" alt="" />
                    <h2>MacBook Pro 13</h2>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                    <h1>$ 1,200.00 USD</h1>
                </div>
                <div className="card flex flex-col items-start gap-5">
                    <img className="w-[150px]" src="https://s3-alpha-sig.figma.com/img/fd2b/b60b/3e90a12a6959d21f7896d88b68032add?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gn~YQpFATFNT40zdo8dmJoOp6GTXIRL7W7W85E-82qpn2XhTUFg3KKIwWslqNO1XUjEORtIjRv3jZj0WvDHMZxi7GX9qydJki-xuynLCJWvnlrtlj-UGpYVTe3F2CERxibSyeBS9pJQN-UMWCruCikTphc0mpPeT-JNbWFS9aXz-qVWPatrilf26Pdi4mlyZiCEqh484V0P-l~iJdGjf032Dyf7xRzsnvSZEqB717ZySBySIqVf8RpuBYHhAlEoVGflra5SMT9vSShZzjm~VZomENeAi5EM4dew6NjB6TQCrqRMiFiDGyY-NgdoJfUnk8pgAxZEfxyZWqh1GPEhVng__" alt="" />
                    <h2>MacBook Pro 13</h2>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                    <h1>$ 1,200.00 USD</h1>
                </div>
            </div>
        </div>
       </div>
        </>
    )
}