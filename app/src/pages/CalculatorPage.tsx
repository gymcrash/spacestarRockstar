import { CalculatorComponent } from "../components/CalculatorComponent/CalculatorComponent";
import { QuestionComponent } from "../components/QuestionComponent/QuestionComponent";
import { StarscapeBackgroundComponent } from "../components/StarscapeBackgroundComponent/StarscapeBackgroundComponent";
import { FocusLayout } from "../layouts/FocusLayout/FocusLayout";
import { FullScreenPage } from "../layouts/FullScreenPageLayout/FullScreenPageLayout";

function CalculatorPage() {
  return (
    <FullScreenPage>
      <StarscapeBackgroundComponent />
      <FocusLayout>
        <QuestionComponent questionText={""} />
        <CalculatorComponent />
      </FocusLayout>
    </FullScreenPage>
  );
}

export default CalculatorPage;
