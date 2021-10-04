import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import LeftContent from '../leftContent';
import { useAuth0 } from '@auth0/auth0-react';

export default function Login() {
	const { loginWithRedirect } = useAuth0();

	return (
		<Row gutter={[32, 0]} className="da-authentication-page">
			<LeftContent />

			<Col lg={12} span={24} className="da-py-sm-0 da-py-md-64">
				<Row className="da-h-100" align="middle" justify="center">
					<Col xxl={11} xl={15} lg={20} md={20} sm={24} className="da-px-sm-8 da-pt-24 da-pb-48">
						<h1 className="da-mb-sm-0">Login</h1>
						<p className="da-mt-sm-0 da-mt-8 da-text-color-black-60">
							Welcome back, please login to your account.
						</p>

						<Form
							layout="vertical"
							name="basic"
							initialValues={{ remember: true }}
							className="da-mt-sm-16 da-mt-32"
						>
							<Row align="middle" justify="space-between">
								<Form.Item className="da-mb-0">
									<Checkbox name="remember">Remember me</Checkbox>
								</Form.Item>
								<span onClick={() => loginWithRedirect()}>
									<h6
										className="da-button da-text-color-black-80"
										to="/pages/authentication/recover-password"
									>
										Forgot Password?
									</h6>
								</span>
							</Row>
							<Form.Item className="da-mt-16 da-mb-8">
								<Button block type="primary" onClick={() => loginWithRedirect()}>
									Sign in
								</Button>
							</Form.Item>
						</Form>

						<Col className="da-form-info">
							<span className="da-text-color-black-80 da-caption da-mr-4">
								Don’t you have an account?
							</span>

							<span className="da-text-color-primary-1 da-caption" onClick={() => loginWithRedirect()}>
								Create an account
							</span>
						</Col>

						<Col className="da-other-links da-mt-24">
							<a href="www.agenciaguerra.com" className="da-text-color-black-80">
								Privacy Policy
							</a>
							<a href="www.agenciaguerra.com" className="da-text-color-black-80">
								Term of use
							</a>
						</Col>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}
