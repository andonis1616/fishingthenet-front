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
          Accessible security
        </div>
      </div>
    </div>
  );

  const renderStandard = () => (
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
          Accessible security
        </div>
      </div>
    </div>
  );

  const renderPremium = () => (
    <div className="pricing-plans-card">
      <div className="pricing-plans">Premium</div>
      <div className="pricing-plans-price">$55</div>
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
          Accessible security
        </div>

        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Accessible security
        </div>

        <div className="pricing-plans-text">
          <div className="pricing-plans-svg">
            <Check></Check>
          </div>
          Accessible security
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
          <td>Accessible security</td>
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
          <td>Accessible security</td>
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
          <td>Accessible</td>
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
          <td>Security</td>
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
        <tr>
          <td>Accessible</td>
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
