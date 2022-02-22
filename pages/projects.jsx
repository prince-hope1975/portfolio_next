import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <Head>
        <title>My Work</title>
        <meta
          name="description"
          content="Prince charles Amachree Portfoliio About"
        />
        <link rel="icon" href="/png.ico" />
      </Head>
      <Header />
      <main>
        <main id="work">
          <h1 class="lg-heading">
            My
            <span class="text-secondary">Work</span>
          </h1>
          <h2 class="sm-heading">Check out some of my projects...</h2>
          <div class="projects">
            <div class="item">
              <a href="#">
                <Image width={400} height={400} src="/project1.jpg" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#">
                <Image width={400} height={400} src="/project2.jpg" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#">
                <Image width={400} height={400} src="/project3.jpg" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#">
                <Image width={400} height={400} src="/project4.jpg" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#">
                <Image width={400} height={400} src="/project5.jpg" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
          </div>
        </main>
      </main>
      <Footer />
    </>
  );
};
export default Work;
