/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "pages/LandingPages/Author/sections/Profile";
import Posts from "pages/LandingPages/Author/sections/Posts";
import Contact from "pages/LandingPages/Author/sections/Contact";
import Footer from "pages/LandingPages/Author/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

// axios
import axios from "axios";

function Author() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "http://localhost:8080/handongmo/google/login",
          onClick: () => {
            // Google 로그인을 위한 요청
            axios
              .get("/handongmo/google/login")
              .then(() => {
                const code = " 실제 코드가 여기에 있어야 함"; // ToDo: 백엔드와 연결 과정 이슈

                // memberId를 이용하여 서버에서 다른 작업을 수행하거나 저장
                axios
                  .get(`/api/auth/google/callback?code=${code}`)
                  .then((response) => {
                    const memberId = response.data;
                    console.log("Received memberId:", memberId);
                    // 여기에서 memberId를 사용하여 원하는 작업 수행
                  })
                  .catch((error) => {
                    console.error("Error fetching memberId:", error);
                  });
              })
              .catch((error) => {
                console.error("Error redirecting to Google login:", error);
              });
          },
          label: "로그인",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
          <Posts />
        </Card>
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default Author;
