import "./footer.css";

export default function Footer(props) {
  return (
    <>
      <br />
      <footer class="bg-dark text-center text-white">
        <div class="footer-container p-4">
          <section class="mb-4">
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-facebook-f"></i>
            </a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-twitter"></i>
            </a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-google"></i>
            </a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-instagram"></i>
            </a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-github"></i>
            </a>
          </section>

          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">
                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div class="col-md-5 col-12">
                  <div class="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" class="form-control" />
                    <label class="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div class="col-auto">
                  <button type="submit" class="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section class="">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">سوق كار</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a id="foot" href="#!" class="text-white">
                      من نحن
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" class="text-white">
                      تواصل معنا
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" class="text-white">
                      English
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">مساعدة</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a id="foot" href="#!" class="text-white">
                      الأسئلة الشائعة
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" class="text-white">
                      سياسة الخصوصية
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" class="text-white ">
                      شروط الاستخدام
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">اشهر مصنعي السيارات</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" id="foot" class="text-white">
                      هيونداي
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="foot" class="text-white">
                      مرسيدس بنز
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="foot" class="text-white">
                      فيات
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
