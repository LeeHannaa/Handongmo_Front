import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
// import MKTypography from "components/MKTypography";

import styled from "styled-components";

function clubIntro() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [imageSrc, setImageSrc] = useState(null);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <MKButton variant="gradient" color="info" onClick={toggleModal}>
            동아리 소개글 쓰기
          </MKButton>
        </Grid>
        <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              position="relative"
              width="1000px"
              height="650px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
              style={{ overflow: "scroll", whiteSpace: "nowrap" }}
            >
              <MKBox
                display="flex"
                alginItems="center"
                // justifyContent="space-between"
                p={1}
              ></MKBox>
              <MKBox
                display="flex"
                alginItems="center"
                justifyContent="space-between"
                p={1}
                style={{ marginTop: "30px", marginBottom: "20px" }}
              >
                <div style={{ margin: "auto" }}>
                  <Title>동아리 소개글</Title>
                </div>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </MKBox>
              <div style={{ margin: "auto" }}>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "50px", marginBottom: "20px" }}>
                    <SubTitle>동아리 이름</SubTitle>
                    <Input></Input>
                  </div>
                  <div>
                    <div style={{ display: "flex", paddingTop: "50px" }}>
                      <div style={{ display: "flex", marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="club"
                          id="club"
                          name="category"
                          checked={selectedOption == "club"}
                          onChange={handleChange}
                        />
                        <RadioName htmlFor="club">동아리</RadioName>
                      </div>
                      <div style={{ display: "flex", marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="academy"
                          id="academy"
                          name="category"
                          checked={selectedOption == "academy"}
                          onChange={handleChange}
                        />
                        <RadioName htmlFor="academy">학회</RadioName>
                      </div>
                      <div style={{ display: "flex", marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="society"
                          id="society"
                          name="category"
                          checked={selectedOption == "society"}
                          onChange={handleChange}
                        />
                        <RadioName htmlFor="society">동호회</RadioName>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {(selectedOption == "club" || selectedOption == "society") && (
                    <div
                      style={{
                        display: "flex",
                        width: "640px",
                        overflow: "scroll",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="major"
                          id="major"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="major">전공</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="sports"
                          id="sports"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="sports">운동</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="music"
                          id="music"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="music">음악</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="art"
                          id="art"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="art">미술</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="faith"
                          id="faith"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="faith">신앙</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="dance"
                          id="dance"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="dance">춤</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="volunteer"
                          id="volunteer"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="volunteer">봉사</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="act"
                          id="act"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="act">연극</RadioName>
                      </div>
                    </div>
                  )}

                  {selectedOption == "academy" && (
                    <div
                      style={{
                        display: "flex",
                        width: "640px",
                        overflow: "scroll",
                        whiteSpace: "nowrap",
                      }}
                      // className="whitespace-nowrap overflow-x-auto flex"
                    >
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="cs"
                          id="cs"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="cs">전산전자</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="ict"
                          id="ict"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="ict">ICT 창업</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="communication"
                          id="communication"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="communication">커뮤니케이션</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="design"
                          id="design"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="design">콘디</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="spatial"
                          id="spatial"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="spatial">공시</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="counceling"
                          id="counceling"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="counceling">상사</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="machanic"
                          id="machanic"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="machanic">기계제어</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="life"
                          id="life"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="life">생명</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="business"
                          id="business"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="business">경영경제</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="low"
                          id="low"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="low">법</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="lang"
                          id="lang"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="lang">국제어문</RadioName>
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <RadioInput
                          type="radio"
                          value="creative"
                          id="creative"
                          name="tag"
                          // onChange={handleChange}
                        />
                        <RadioName htmlFor="creative">창의융합</RadioName>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "15px",
                    margin: "auto",
                  }}
                >
                  <div style={{ marginRight: "25px" }}>
                    <SubTitle>대표자 이름</SubTitle>
                    <Input style={{ marginRight: "10px", width: "300px" }}></Input>
                  </div>
                  <div>
                    <SubTitle>문의 연락처</SubTitle>
                    <Input style={{ marginRight: "10px", width: "300px" }}></Input>
                  </div>
                </div>
                <div>
                  <SubTitle>소개글</SubTitle>
                  <Input style={{ width: "640px", height: "250px", alignItems: "start" }}></Input>
                </div>
                <div>
                  <SubTitle>사진 업로드</SubTitle>
                  {imageSrc && (
                    <img
                      src={imageSrc}
                      style={{
                        display: "block",
                        width: "200px",
                        borderRadius: "10px",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    />
                  )}
                  <input accept="image/*" multiple type="file" onChange={(e) => onUpload(e)} />
                </div>
              </div>

              <Divider sx={{ my: 0 }} style={{ marginTop: "30px", marginBottom: "10px" }} />
              <MKBox
                display="flex"
                justifyContent="space-between"
                p={1.5}
                style={{ marginLeft: "150px", marginRight: "150px", marginBottom: "20px" }}
              >
                <ModalButton onClick={toggleModal}>닫기</ModalButton>
                <ModalButton>게시글 등록</ModalButton>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

const Title = styled.h1`
  font-size: 25px;
`;

const SubTitle = styled.h1`
  font-size: 16px;
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 300px;
  height: 38px;
  font-size: 15px;
  display: flex;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioName = styled.label`
  width: 85px;
  height: 35px;
  background-color: #f2f4f6;
  color: #383838;
  border: none;
  /* border: 1px solid black; */
  border-radius: 30px;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    /* color: white; */
  }

  input[type="radio"]:checked + & {
    background-color: #4863a0;
    color: white;
  }
`;

const ModalButton = styled.button`
  width: 75px;
  height: 35px;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: lightgray;
  }
`;

export default clubIntro;
