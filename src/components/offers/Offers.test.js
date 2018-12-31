import React from "react";
import { create } from "react-test-renderer";
import { render, cleanup } from "react-testing-library";
import "jest-styled-components";
import Offers from "./Offers";

afterEach(cleanup);

test("snapshot", () => {
  const c = create(<Offers />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("it renders with some props", () => {
  const props = {
    offers: [
      {
        Description: [
          {
            legalDisclaimer:
              "Offer available online only. Offer applies to purchases of $50 or more of eligible items across all categories. Look for the &quot;SPEND $50: SHIPS FREE&quot; logo on eligible items. Some exclusions apply. Items that are not eligible are subject to shipping charges. $50 purchase is based on eligible merchandise subtotal. Items that are not eligible, GiftCards, e-GiftCards, gift wrap, tax and shipping and handling charges will not be included in determining merchandise subtotal. Offer valid for orders shipping within the 48 contiguous states, as well as APO/FPO and for Standard and To the Door shipping methods only. Not valid on previous orders.",
            shortDescription: "SPEND $50, GET FREE SHIPPING"
          }
        ],
        endDate: "2014-05-25 06:59:00.001",
        promotionIdentifier: "10736506",
        promotionType:
          "Buy catalog entries from category X, get shipping at a fixed price",
        startDate: "2014-05-18 07:00:00.001"
      },
      {
        Description: [
          {
            legalDisclaimer:
              "Offer available online only. Offer applies to purchases of $50 or more of eligible items across all categories. Look for the &quot;SPEND $50: SHIPS FREE&quot; logo on eligible items. Some exclusions apply. Items that are not eligible are subject to shipping charges. $50 purchase is based on eligible merchandise subtotal. Items that are not eligible, GiftCards, e-GiftCards, gift wrap, tax and shipping and handling charges will not be included in determining merchandise subtotal. Offer valid for orders shipping within the 48 contiguous states, as well as APO/FPO and for Standard and To the Door shipping methods only. Not valid on previous orders.",
            shortDescription: "THIS IS A SLIGHTLY DIFFERENT OFFER"
          }
        ],
        endDate: "2014-05-25 06:59:00.001",
        promotionIdentifier: "10736506",
        promotionType:
          "Buy catalog entries from category X, get shipping at a fixed price",
        startDate: "2014-05-18 07:00:00.001"
      }
    ]
  };
  const { getByText } = render(<Offers {...props} />);

  const offer = getByText(/SLIGHTLY/);

  expect(offer).toBeDefined();
});
