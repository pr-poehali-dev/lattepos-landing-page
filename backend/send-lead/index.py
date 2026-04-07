import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с формы обратной связи на почту demo@lattesoft.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    company = body.get('company', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'required'}, ensure_ascii=False)
        }

    smtp_user = os.environ['SMTP_USER']
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = 'demo@lattesoft.ru'

    html = f"""
    <h2 style="color:#c9603a;">Новая заявка с сайта LattePOS</h2>
    <table style="border-collapse:collapse;width:100%;">
      <tr><td style="padding:8px;color:#666;width:140px;">Имя</td><td style="padding:8px;font-weight:bold;">{name}</td></tr>
      <tr><td style="padding:8px;color:#666;">Телефон</td><td style="padding:8px;font-weight:bold;">{phone}</td></tr>
      {'<tr><td style="padding:8px;color:#666;">Компания</td><td style="padding:8px;">' + company + '</td></tr>' if company else ''}
      {'<tr><td style="padding:8px;color:#666;">Сообщение</td><td style="padding:8px;">' + message + '</td></tr>' if message else ''}
    </table>
    <p style="color:#999;font-size:12px;margin-top:20px;">Отправлено с сайта lattepos.ru</p>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Заявка с сайта: {name}'
    msg['From'] = smtp_user
    msg['To'] = to_email
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }