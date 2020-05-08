package edu.miu.cs.cs472.lesson13jspmvc.service;

import edu.miu.cs.cs472.lesson13jspmvc.model.ContactMessage;
import edu.miu.cs.cs472.lesson13jspmvc.repository.ContactMessageRepository;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class SearchedMessageService {
    private ContactMessageRepository contactMessageRepository;

    public SearchedMessageService() {
        this.contactMessageRepository =  new ContactMessageRepository();
    }
    private boolean isPresent (String theItem, String str2Check){
        Pattern checkRegex = Pattern.compile(theItem, Pattern.CASE_INSENSITIVE);
        Matcher searchMatcher = checkRegex.matcher(str2Check);
        if(!searchMatcher.find()){
            return false;
        }
        return true;
    }
    public List<ContactMessage> searchContactMessage(String item) {
        Pattern p = Pattern.compile(".*item*.", Pattern.CASE_INSENSITIVE);
        Matcher m = p.matcher("item");
        boolean isMatch = m.matches();

        return this.contactMessageRepository.getContactMessages().stream()
                .filter(str -> isPresent(item, str.getCategory()) || isPresent(item, str.getCustomerName()) || isPresent(item, str.getGender()))
                .collect(Collectors.toList());
    }
}
