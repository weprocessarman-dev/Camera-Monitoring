<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$input = json_decode(file_get_contents('php://input'), true);

$firstName = htmlspecialchars($input['firstName'] ?? '');
$lastName = htmlspecialchars($input['lastName'] ?? '');
$email = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars($input['phone'] ?? '');
$service = htmlspecialchars($input['service'] ?? '');
$businessType = htmlspecialchars($input['businessType'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');

// Validation
if (!$firstName || !$lastName || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing']);
    exit;
}

// Load email template
$template = file_get_contents('email-template.html');

// Replace placeholders
$template = str_replace('{{firstName}}', $firstName, $template);
$template = str_replace('{{lastName}}', $lastName, $template);
$template = str_replace('{{email}}', $email, $template);
$template = str_replace('{{phone}}', $phone ?: 'Not provided', $template);
$template = str_replace('{{service}}', $service ?: 'Not specified', $template);
$template = str_replace('{{businessType}}', $businessType ?: 'Not specified', $template);
$template = str_replace('{{message}}', nl2br($message), $template);
$template = str_replace('{{timestamp}}', date('Y-m-d H:i:s T'), $template);

// Email configuration
$to = 'developerarman777@gmail.com';
$subject = 'New Contact Form Submission - WeSurveil';
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: WeSurveil Contact Form <noreply@wesurveil.com>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

// Send email
if (mail($to, $subject, $template, implode("\r\n", $headers))) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>