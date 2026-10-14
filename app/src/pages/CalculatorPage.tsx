import { FocusLayout } from "../layouts/FocusLayout/FocusLayout";
import { FullScreenPage } from "../layouts/FullScreenPageLayout/FullScreenPageLayout";

function CalculatorPage() {
  return (
    <FullScreenPage>
        <FocusLayout>
            <h1>Calculator Page</h1>
            {/* Add your calculator UI here */}
        </FocusLayout>
    </FullScreenPage>
  );
}

export default CalculatorPage;