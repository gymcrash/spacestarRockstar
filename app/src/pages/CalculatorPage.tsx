import { CalculatorComponent } from "../components/CalculatorComponent/CalculatorComponent";
import { QuestionComponent } from "../components/QuestionComponent/QuestionComponent";
import { FocusLayout } from "../layouts/FocusLayout/FocusLayout";
import { FullScreenPage } from "../layouts/FullScreenPageLayout/FullScreenPageLayout";

function CalculatorPage() {
    return (
        <FullScreenPage>
            <FocusLayout>
                <QuestionComponent questions={[]} />
                <CalculatorComponent />
            </FocusLayout>
        </FullScreenPage>
    );
}

export default CalculatorPage;