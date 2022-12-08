import React from "react";
import { connect } from "react-redux";
import Check from "../../utils/Icons/Check";
import CheckGreen from "../../utils/Icons/CheckGreen";
import Line from "../../utils/Icons/Line";
import Header from "../Header/Header";

import "./PricingPlans.css";

const PricingPlans = ({ ...props }) => {
  const renderFree = () => (
    <div className="pricing-plans-card">
      <div className="pricing-plans">Free</div>
      <div className="pricing-plans-price">$0</div>
      <div className="pricing-plans-group">
        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Easily identifying threat
        </div>
        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Phishing awareness
        </div>
        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Accessible and secure
        </div>
      </div>
    </div>
  );

  const renderStandard = () => (
    <div className="pricing-plans-card">
      <div className="pricing-plans">Standard</div>
      <div className="pricing-plans-price">$20/month</div>
      <div className="pricing-plans-group">
        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Easily identifying threat
        </div>
        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Phishing awareness
        </div>
        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Accessible and secure
        </div>
        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Getting tehnical support 24/7
        </div>  
      </div>
    </div>
  );

  const renderPremium = () => (
    <div className="pricing-plans-card">
      <div className="pricing-plans">Premium</div>
      <div className="pricing-plans-price">$55/month</div>
      <div className="pricing-plans-group">
        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Easily identifying threat
        </div>

        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Phishing awareness
        </div>

        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Accessible and secure
        </div>

        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Getting tehnical support 24/7
        </div>

        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Custom deployment
        </div>
      </div>
    </div>
  );

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Features</th>
          <th>Free</th>
          <th>Standard</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Easily identifying threat</td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
        </tr>
        <tr>
          <td>Phishing awareness</td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
        </tr>
        <tr>
          <td>Accessible and secure</td>
          <td>
          <CheckGreen></CheckGreen>
          </td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
        </tr>
        <tr>
          <td>Getting tehnical support 24/7</td>
          <td>
            <Line></Line>
          </td>
          <td>
          <CheckGreen></CheckGreen>
          </td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
        </tr>
        <tr>
          <td>Custom deployment</td>
          <td>
            <Line></Line>
          </td>
          <td>
            <Line></Line>
          </td>
          <td>
            <CheckGreen></CheckGreen>
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <>
      <Header></Header>
      <div className="container-pricing">
        <h1>Pricing plans</h1>
        <h2>Available prices for our services</h2>
        {renderFree()}
        {renderStandard()}
        {renderPremium()}
      </div>
      {renderTable()}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PricingPlans);
