import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Row, Col, Button, Input, message, Card } from "antd";
import { test } from "../store/api/User.api";
import styles from "./Signin.module.css";
import Image from "next/image";
import Ondostic from "/public/images/ondostic.png";
import kakaoLogo from "/public/images/kakao.jpg";
import AppLayout from "../components/layout/AppLayout";

export interface LoginReqType {
  email: string;
  password: string;
}

interface SigninProps {
  loading: boolean;
  error: Error | null;
  login: ({ email, password }: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({ loading, login, error }) => {
  const emailRef = React.useRef<Input>(null);
  const passwordRef = React.useRef<Input>(null);
  return (
    <AppLayout>
      <form>
        <Row align="middle" className={styles.signin_row}>
          <Col span={24}>
            <Row className={styles.signin_contents}>
              <Col span={12}>
                <div className={styles.signin_bg}>
                  <Image src={Ondostic} alt="Signin" />
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.signin_title}>Ondo</div>
                <div className={styles.signin_subtitle}>3일간의 도전</div>
                <div className={styles.signin_underline} />
                <div className={styles.email_title}>
                  <span className={styles.required}>* </span>
                  Email
                  <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                  <Input
                    placeholder="Email"
                    autoComplete="email"
                    name="email"
                    ref={emailRef}
                    className={styles.input}
                  />
                </div>
                <div className={styles.password_title}>
                  <span className={styles.required}>* </span>
                  Password
                  <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    ref={passwordRef}
                    className={styles.input}
                  />
                </div>
                <div className={styles.button_area}>
                  <Button
                    size="large"
                    loading={loading}
                    onClick={click}
                    className={styles.button}
                  >
                    Sign In
                  </Button>
                </div>
                <div className={styles.div_bottom}>
                  <span className={styles.required}> *</span>
                  <Link href="">
                    <a>비밀번호 찾기 </a>
                  </Link>
                  *
                  <Link href="">
                    <a> 회원가입</a>
                  </Link>
                  *
                  <div className={styles.div_kakao}>
                    <a href={test}>
                      <Image src={kakaoLogo} />
                    </a>
                  </div>
                  <span className={styles.required}> *</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </AppLayout>
  );

  function click() {
    const email = emailRef.current?.state.value;
    const password = passwordRef.current?.state.value;

    login({ email, password });
  }
};

export default Signin;
