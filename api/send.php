<?php
// Lunchee.is enquiry form → email to contact@lunchee.is (runs on the SEOHOST server; replaces FormSubmit).
// The page posts the form here first; if this fails it falls back to FormSubmit.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$to = 'contact@lunchee.is';
$out = function ($ok, $msg = '', $code = 200) { http_response_code($code); echo json_encode(['success' => $ok, 'message' => $msg]); exit; };

if ($_SERVER['REQUEST_METHOD'] !== 'POST') $out(false, 'POST only', 405);
if (!empty($_POST['_honey'])) $out(true); // bot filled the hidden field: pretend it worked

$clean = function ($v, $max = 2000) { return mb_substr(trim(str_replace("\0", '', (string) $v)), 0, $max); };
$email = $clean($_POST['email'] ?? '', 200);
$name = $clean($_POST['name'] ?? '', 200);
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $name === '') $out(false, 'Name and a valid email are required', 400);

// Fields in a fixed order; anything starting with "_" is form plumbing and is skipped
$labels = [
  'name' => 'Name', 'company' => 'Company', 'email' => 'Email', 'phone' => 'Phone',
  'segment' => 'Interested in', 'quantity' => 'Quantity', 'colours' => 'Colours', 'message' => 'Message',
  'campaign' => 'Campaign', 'cta' => 'Button clicked', 'source' => 'Source', 'landing_page' => 'Landing page'
];
$lines = [];
foreach ($labels as $k => $label) {
  $v = $clean($_POST[$k] ?? '');
  if ($v !== '') $lines[] = $label . ': ' . $v;
}
$lines[] = '';
$lines[] = 'Sent ' . date('Y-m-d H:i') . ' from lunchee.is';

$oneLine = function ($v) { return preg_replace('/[\r\n]+/', ' ', $v); };
$subject = $oneLine($clean($_POST['_subject'] ?? 'Lunchee Iceland: new enquiry', 200));
$headers = implode("\r\n", [
  'From: Lunchee.is <' . $to . '>',
  'Reply-To: ' . $oneLine($name) . ' <' . $email . '>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit'
]);
$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', implode("\n", $lines), $headers, '-f' . $to);
$sent ? $out(true) : $out(false, 'mail() failed', 500);
