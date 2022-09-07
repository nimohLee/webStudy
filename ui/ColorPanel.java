package project89;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class ColorPanel extends JFrame implements ActionListener{
	JFrame jf;
	JPanel mainPnl,btnPnl, yellowPnl, bluePnl;
	JButton redBtn, yellowBtn, blueBtn;
	FileGUI4 pnlF;

	public ColorPanel() {
		jf = new JFrame();
		jf.setLayout(new BorderLayout());
		jf.setSize(600, 500);
		
		mainPnl = new JPanel(new BorderLayout());
//		mainPnl.setBackground(Color.WHITE);
		pnlF = new FileGUI4();
		btnPnl = new JPanel();
		yellowPnl = new JPanel();
		yellowPnl.setBackground(Color.YELLOW);
		bluePnl = new JPanel();
		bluePnl.setBackground(Color.BLUE);
		redBtn = new JButton();
		redBtn.setBackground(Color.RED);
		yellowBtn = new JButton();
		yellowBtn.setBackground(Color.YELLOW);
		blueBtn = new JButton();
		blueBtn.setBackground(Color.BLUE);
		
		redBtn.addActionListener(this);
		yellowBtn.addActionListener(this);
		blueBtn.addActionListener(this);
		
		btnPnl.setLayout(new GridLayout(3,1));
		btnPnl.add(redBtn);
		btnPnl.add(yellowBtn);
		btnPnl.add(blueBtn);
		
		
		jf.add(btnPnl, "West");
		jf.add(mainPnl, "Center");
		
		jf.setVisible(true);
	}
	

	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource()==redBtn) {
//			mainPnl.setBackground(Color.RED);
			mainPnl.removeAll();
			mainPnl.add(pnlF);
		}else if(e.getSource()==yellowBtn) {
//			mainPnl.setBackground(Color.YELLOW);
			mainPnl.removeAll();
			mainPnl.add(yellowPnl);
		}else if(e.getSource()==blueBtn) {
//			mainPnl.setBackground(Color.BLUE);
			mainPnl.removeAll();
			mainPnl.add(bluePnl);
		}
		//mainPnl.updateUI(); //�г� ȭ�� ���� ȿ�� - ���� �̰ͺ��� �Ʒ������� ���̾��°�찡 ����
		mainPnl.repaint(); // �������� ���� ��. ���̾ƿ�, �� ��� // ������ revalidate�� �Ǵµ� ���� ������ ������ ,, �����ϸ� ���̾��� �Ϻ��ϰ� ���ư�
		mainPnl.revalidate(); //���̾ƿ��� ���� ����ؼ� ȭ���� ������.
	}
	
	public static void main(String[] args) {
		new ColorPanel();
	}

}
