import instance from "../../api/axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../components/DataContext/DataContext";
import { IoMdContact, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import classes from "./Home.module.css";
function Home() {
  const { user, setUser } = useContext(AppContext);
  const token = localStorage.getItem("token");
  const [questions, setquestions] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  const navigate = useNavigate();
  async function Loadquestions() {
    try {
      const { data } = await instance.get("/questions", {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      //   console.log(data);
      setIsLoading(false);
      setquestions(() => data.questions);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      navigate("/login");
    }
  }
  async function checkuser() {
    try {
      const { data } = await instance.get("/users/check", {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      // console.log(data);
      setUser(data.username);
      navigate("/");
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }
  useEffect(() => {
    setIsLoading(true);
    checkuser();
    Loadquestions();
  }, []);
  useEffect(() => {
    const filtered = questions?.filter((question) =>
      question.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredQuestions(filtered);
  }, [searchItem, questions]);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <section className={classes.home__container}>
          <div className={classes.home__topcontainer}>
            <div>
              <Link to="/questions">Ask Question</Link>
            </div>
            <div style={{ fontSize: "20px", fontWeight: "300" }}>
              <p>
                WELCOME:<span style={{ color: " #DA7229" }}>{user}</span>
              </p>
            </div>
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "300",
              marginBottom: "20px",
            }}
          >
            <div className={classes.search}>
              <input
                type="text"
                value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                placeholder="Search question"
              />
            </div>
          </div>
          <div>
            {filteredQuestions?.map((question, i) => {
              return (
                <div className={classes.question__outercontainer} key={i}>
                  <hr />
                  <div className={classes.home__questioncontainer}>
                    <div className={classes.home__iconandusernamecontainer}>
                      <div>
                        <div>
                          <IoMdContact size={80} />
                        </div>
                        <div className={classes.home__questionusename}>
                          {" "}
                          <p>{question?.user_name}</p>
                        </div>
                      </div>
                      <div className={classes.home__questiontitle}>
                        <p>{question?.title}</p>
                      </div>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      {" "}
                      <Link to={`/home/answers/${question.question_id}`}>
                        {" "}
                        <IoIosArrowForward size={30} color="black">
                          {" "}
                        </IoIosArrowForward>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
