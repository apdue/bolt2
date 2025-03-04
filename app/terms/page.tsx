import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this application, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily use this application for personal,
            non-commercial transitory viewing only.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on this application are provided on an &apos;as is&apos;
            basis. We make no warranties, expressed or implied, and hereby disclaim
            and negate all other warranties including, without limitation,
            implied warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall we or our suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or
            due to business interruption) arising out of the use or inability to
            use this application.
          </p>

          <h2>5. Privacy</h2>
          <p>
            Your use of this application is also governed by our Privacy Policy,
            which is incorporated into these terms by reference.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance
            with applicable laws and you irrevocably submit to the exclusive
            jurisdiction of the courts in that location.
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 