import { CalculatorComponent } from "../components/CalculatorComponent/CalculatorComponent";
import { FocusLayout } from "../layouts/FocusLayout/FocusLayout";
import { FullScreenPage } from "../layouts/FullScreenPageLayout/FullScreenPageLayout";

function CalculatorPage() {
  return (
    <FullScreenPage>
        <FocusLayout>
            <h1>Calculator Page</h1>
            <CalculatorComponent />
        </FocusLayout>
    </FullScreenPage>
  );
}

export default CalculatorPage;