import React from "react";
import { DadosTab1 } from "../../DadosTab1";

export default function FirstTab() {
  return (
    <div className="FirstTab">
      <p>As frutas são fontes de vitaminas, minerais, fibras e antioxidantes de extrema importância para o funcionamento do nosso organismo.</p>
      {<DadosTab1 />}
    </div>
  );
};

